// @ts-check
/// <reference path="./types.bookman.d.ts" />

/**
 * HTML Bookman - Audio Player Helper
    <div id="player" class="audioblock">
     <div class="content">
       <audio src="file:///C:/opendocs/bjp_voices/Lesson_04_Dialogue_2.ogg" controls="">
      Your browser does not support the audio tag.
      </audio>
     </div>
    </div>
    
    <style>
    @media print {
    	#player { display: none; }
    }
    #player { position: fixed; top: 4px; left: 50%; opacity: 0.5; }
    #player > div > audio { left: -50%; position: relative; }
    </style>
    
    <script src="../opendocs/utilities/bookman.js"><\/script>
 */


/**
 * HTML Bookman Utilities (plugined)
*/
class Bookman {

    /**@type {HTMLAudioElement} */
    audio = null

    /**@type {Map<number, BookmanPlugin>} */
    static plugins = new Map()
    static _plugin_sequence = 0

    usage = {
        Key_toggle_play   : "p",          // -- pause/play audio
        Key_seek_backward : "ArrowLeft",  // -- seek backward
        Key_seek_forward  : "ArrowRight", // -- seek forward
        Key_repeat_A      : "[",          // -- set repeat A point
        Key_repeat_B      : "]",          // -- set repeat B point
        Key_repeat_reset  : "\\",         // -- reset repeat A-B points
    }

    /**
     * 
     * @param {{audio: HTMLAudioElement}} parameters 
     */
    constructor(parameters) {
        this.audio = parameters.audio;
        document.addEventListener("keydown", evt => this.key_process(evt));
        document.addEventListener("click", evt => this.ui_click(evt));
        // document.onclick = /** PointerEvent */ evt=>{ ... }
        for (const plugin of Bookman.plugins.values()) {
            plugin.load(this);
        }
    }

    static get_plugin_sequence() {
        return this._plugin_sequence++;
    }

    /**
     * 
     * @param {BookmanPlugin} plugin 
     */
    static plugin_register(plugin) {
        let id = this.get_plugin_sequence();
        this.plugins.set(id, plugin);
        return id;
    }

    /**
     * 
     * @param {number} id 
     */
    static plugin_unregister(id) {
        let plugin = this.plugins.get(id);
        if (isNaN(id) || id < 0 || !plugin ) 
            throw new Error("Bookman plugin ID invalid: " + id);
        plugin.unload();
        this.plugins.delete(id);
    }

    /**
     * 
     * @param {PointerEvent} evt 
     * @returns 
     */
    ui_click (evt) {
        // The deprecated Event.srcElement is an alias for the Event.target property.
        if (evt.target == null || evt.target.parentNode == null) return;
        let anchor = evt.target.parentNode.parentNode
        console.log({audio, anchor, evt, target: evt.target})
        if (audio == null || anchor == null) return true;
        if ( /(m4a$|ogg$|flac$|mp3$|wav$|cgi)/.test(anchor.href) ) {
            audio.src = anchor.href;
            audio.play();
            evt.preventDefault();
            evt.stopPropagation();
        }
    }

    /**
     * 
     * @param {KeyboardEvent} evt 
     */
    key_process(evt) {
        if (this.dispatchKeyboardEvent(evt) === true) return;
        let speed = evt.shiftKey === true? 5 : 1;
        console.log({speed, event:evt, key:evt.key, code:evt.code});
        switch (evt.key) {
            case this.usage.Key_toggle_play:
                this.toggle_play();
                break;
        }
    }

    /**@param {KeyboardEvent} evt  */
    dispatchKeyboardEvent(evt) {
        for (const plugin of Bookman.plugins.values()) {
            try {
                let state = /**@type {BookmanPlugin}*/(plugin).key_process(evt);
                if (state === true) return true;
            } catch (error) {
                console.error(`BookmanPlugin error:`, error);
            }
        }
    }

    toggle_play() {
        console.log({audio: this.audio, currentTime: this.audio.currentTime});
        this.audio.paused? this.audio.play() : this.audio.pause()
    }
}

/**
 * @implements {IBookmanPlugin}
 */
class BookmanPlugin {

    /**@type {Bookman} */
    bookman = null

    constructor() {
        
    }

    /**
     * @param {Bookman} bookman
     * https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement
     */
    load(bookman) {
        // debugger;
        this.bookman = bookman;
    }
    
    unload() {
        
    }

    /**@param {KeyboardEvent} evt */
    key_process(evt) {
        return false;
    }
}

class RepeatAB extends BookmanPlugin {
    repeat = {A:NaN, B: NaN}

    constructor(){
        super();
        this.abmonitor = this.abmonitor.bind(this);
    }

    /**
     * @param {Bookman} bookman
     */
    load(bookman) {
        super.load(bookman);
        bookman.audio.addEventListener("timeupdate", this.abmonitor)
    }

    unload() {
        this.bookman.audio.removeEventListener("timeupdate", this.abmonitor);
    }

    /**
     * @param {KeyboardEvent} evt
     * @returns {boolean} Return true to stop event propagation.
     **/
    key_process(evt) {
        // ⚠️ 使用非空断言（确保在调用前 load 已被调用）
        const bookman = /**@type {Bookman} */(this.bookman);
        switch (evt.key) {
            case bookman.usage.Key_repeat_A:
                this.repeat.A = bookman.audio.currentTime;
                return true;
            case bookman.usage.Key_repeat_B:
                this.repeat.B = bookman.audio.currentTime;
                return true;
            case bookman.usage.Key_repeat_reset:
                this.repeat.A = NaN;
                this.repeat.B = NaN;
                return true;
        }
        return false;
    }

    /**@param {Event} evt */
    abmonitor(evt){
        if (evt.type !== "timeupdate" 
            || this.bookman.audio.paused === true
            || isNaN(this.repeat.B)) return
        if (this.bookman.audio.currentTime > this.repeat.B) {
            let pA = isNaN(this.repeat.A)? 0 : this.repeat.A;
            this.bookman.audio.currentTime = Math.max(pA,0);
        };
    }
}


class MediaSeeker extends BookmanPlugin{

    /**
     * @param {KeyboardEvent} evt
     * @returns {boolean} Return true to stop event propagation.
     **/
    key_process(evt) {
        let speed = evt.shiftKey === true? 5 : 1;
        switch (evt.key) {
            case this.bookman.usage.Key_seek_backward:
                this.audio_seek(-0.5 * speed);
                return true;
            case this.bookman.usage.Key_seek_forward:
                this.audio_seek(0.5 * speed);
                return true;
        }
        return false;
    }

    /**
     * 
     * @param {number} offset 
     */
    audio_seek(offset){
        let position = offset>0? 
            Math.min(this.bookman.audio.currentTime + offset, this.bookman.audio.duration) :
            Math.max(0, this.bookman.audio.currentTime + offset) ;
        this.bookman.audio.currentTime = position;
    }
}


/**
 * @type {HTMLAudioElement | null}
 */
let audio = document.querySelector("#player > div > audio");
if (audio != null) {
    const ab = new RepeatAB();
    const sk = new MediaSeeker();
    const id_ab = Bookman.plugin_register(ab);
    const id_sk = Bookman.plugin_register(sk);
    const bookman = new Bookman({audio});
}
