\version "2.25.2"

\header {
  title = "小星星"
  subtitle = "Twinkle Twinkle Little Star"
  composer = "Jewel"
  arranger = "Jeango"
}

%% \markup \box \wordwrap {
\markuplist \wordwrap-lines {
  《小星星》源自英国传统儿歌 Twinkle Twinkle Little Star
  这是 Jewel 创作并演唱的歌曲，收录于 Lullaby 专辑，该曲发行后风靡全球。
  原曲旋律来自 18 世纪的法国童谣 "Ah! vous dirai-je, maman" (啊！妈妈我要告诉你)，
  英国女诗人 Jane Taylor 填词，在 1806 年正式形成现在的经典儿歌。
}

#(define (myDynamics dynamic)
    (if (equal? dynamic "rfz")
      0.9
      (default-dynamic-absolute-volume dynamic)))

global = {
  \time 4/4
  \key c \major
  \tempo 4=80
}

chordNames = \chordmode {
  \global
  c,2 e,:min f, g, 
  f,2 e,:min d,:min c,
  f,2 g, f, g,
  f,2 g, f, g,
}

melody = \relative c'' {
  \global
  \time 4/4
  \clef treble
  \set Staff.midiInstrument = #"flute"
  \bar ".|:"
  c4 \< c g' g a \! a g2
  f4 f e e d d c2
  g'4 g f f e e d2
  g4 g f f e e \> d2 \!
  \bar ":|."
}

accompany = \relative c {
  \clef bass
  \set Staff.midiInstrument = #"acoustic bass"
  c8 g e g   c8 g e g
  c8 a f a   c8 g e g
  c8 a f a   c8 g e g
  b,8 e g e  c8 g e g
  c g' c e g e c g 
  f c' f a c, g' c e
  f,, c' f a c, g' c e
  g,, d' g b c,8 g'8 c4 
}

words = \lyricmode {
  一 闪 一 闪 亮 晶 晶
  满 天 都 是 小 星 星
  挂 在 天 空 放 光 明
  好 像 许 多 小 眼 睛
}

\score {
  <<
    \new ChordNames \chordNames
    \new FretBoards \chordNames
    \new Staff { \melody }
    \addlyrics { \words }
    \new Staff { \accompany }
  >>
  \layout { }
  \midi { }
}
