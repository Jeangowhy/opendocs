
/**
 * 
 * Javascript 如何利用 @ts-check 实现优雅的接口？可行的方式是：.d.ts + @implements。单纯 JsDoc 注解还不能提供完善的代码编写支持，不能有效利用 TypeScript 编译器提供的强大静态类型检查功能，不能在编写代码的过程排除潜在的错误。
 * 
 * -  https://jsdoc.app/tags-interface
 * -  https://jsdoc.app/tags-implements
 *
 * @interface BookmanPlugin
 * 
 * Usage:
 * 
 * // @ts-check
 * /// <reference path="./types.bookman.d.ts" />
 */


/**
 * BookmanPlugin interface for HTML Bookman Utilities (plugined)
 */
interface IBookmanPlugin {
    load(bookman: Bookman);
    unload();
    /**
     * 
     * @returns {boolean} Return true to stop event propagation.
     */
    key_process(evt: KeyboardEvent): boolean;
}