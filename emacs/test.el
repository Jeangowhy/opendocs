#!/usr/bin/emacs --script
(print 3.1415926535897932)
(message (string-join (list "H" "I" "!") "\n"))
(progn (setq foo 3) (message "Square of %d is %d" foo (* foo foo)))
