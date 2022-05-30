;;;;;;;;^ ctrl
;;;;;;;;+ shift
;;;;;;;;! alt
;;;;;;;;# win

;^+z::
;send, {Ctrl Down} {y} {Ctrl Up}
;return

;;;;;;;for eclipse build
;^]::
;send, {Ctrl}{F11}
;return

;n=0
;Insert::
;a::
;n:=n+1
;send, {space}<%n%>
;send, %n%{enter}{esc}
;return

;q::
;send, {ctrl down}{shift down}{w}{ctrl up}{shift up}
;return

;#i::
;InputBox, ID, "input", "plz input", ,1000,1000,0,0
;n:=ID
;return

;Scrolllock::
;SoundSet -10
;return

;Pause::
;SoundSet +10
;return

;^+!a::
;WinGetTitle, windowName, A
;WinMove, %windowName%, , 0, 0, 600, 1080

;+WheelUp::
;Send {Left}
;return

;+WheelDown::
;Send {Right}
;return

;!WheelUp::
;Send {Volume_Up}
;return

;!WheelDown::
;Send {Volume_Down}
;return

;NumPad3::
;MsgBox, "test text"
;return

;^space::  Winset, Alwaysontop, , A
;return

;;;;;;;login1
;^+[::
;SendInput, electro966
;Send {Tab}
;SendInput, qwer1234
;Send {Tab}
;Send {Enter}
;return

;;;;;;;;login2
;^+]::
;SendInput, 99999
;Send {Tab}
;SendInput, Qwer1234
;Send {Tab}
;Send {Enter}
;return

;;;;;;;;copy3
;^+\::
;SendInput, {-}resources {-}image.kyobobook.co.kr {-}.js {-}google-analytics
;return

;;;;;;;;click1
;^+a::
;MouseGetPos, ax1, ay1
;MouseMove,200,80
;Sleep, 50
;MouseClick,left,200,80
;Sleep, 50
;MouseMove, ax1, ay1
;return

;MouseGetPos, ax, ay
;MsgBox, "test text"

Capslock::
MouseClick,left
return

;^+!h::
;send, {LShift Down}{home}{LShift Up}
;return
;^+!;::
;send, {LShift Down}{end}{LShift Up}
;return
;^+!j::
;send, {LShift}{left}{LShift Up}
;return
;^+!l::
;send, {LShift Down}{right}{LShift Up}
;return

!1::
Send {f1}
return
!2::
Send {f2}
return
!3::
Send {f3}
return
!4::
Send {f4}
return
!+4::
Send !{f4}
return
!5::
Send {f5}
return
!6::
Send {f6}
return
!7::
Send {f7}
return
!8::
Send {f8}
return
!9::
Send {f9}
return
!0::
Send {f10}
return
!-::
Send {f11}
return
!=::
Send {f12}
return


;;;;;;; for mac?
;^~::
;Send, {LCtrl Down}{LShift Down}{Esc Down}
;Send, {Esc Up}{LShift Up}{LCtrl Up}
;return

;!x::
;MouseGetPos, ax1, ay1
;MouseClick,left,%A_CaretX%,%A_CaretY%,2
;Copy the select text to the Clipboard.
;Send, {LCtrl Down}c{LCtrl Up}
;Sleep, 100
;MouseMove,ax1,ay1
;return

;;;;;;; ;;;;;;; 
^+j::
send, {left}
return
^+k::
send, {down}
return
^+l::
send, {right}
return
^+i::
send, {up}
return
^+h::
send, {home}
return
^+;::
send, {end}
return
;+Space::
;send, {vk15}
;return

;;;;;;;;
;^#l::
;MouseGetPos, ax, ay
;MouseMove ax+10,ay
;return
;^#j::
;MouseGetPos, ax, ay
;MouseMove ax-10,ay
;return
;^#i::
;MouseGetPos, ax, ay
;MouseMove ax,ay-10
;return
;^#k::
;MouseGetPos, ax, ay
;MouseMove ax,ay+10
;return
;^#u::
;MouseGetPos, ax, ay
;MouseMove ax-10,ay-10
;return
;^#o::
;MouseGetPos, ax, ay
;MouseMove ax+10,ay-10
;return
;^#m::
;MouseGetPos, ax, ay
;MouseMove ax-10,ay+10
;return
;^#.::
;MouseGetPos, ax, ay
;MouseMove ax+10,ay+10
;return

;;;;;;;;
;#l::
;MouseGetPos, ax, ay
;MouseMove ax+200,ay
;return
;#j::
;MouseGetPos, ax, ay
;MouseMove ax-200,ay
;return
;#i::
;MouseGetPos, ax, ay
;MouseMove ax,ay-200
;return
;#k::
;MouseGetPos, ax, ay
;MouseMove ax,ay+200
;return
;#u::
;MouseGetPos, ax, ay
;MouseMove ax-200,ay-200
;return
;#o::
;MouseGetPos, ax, ay
;MouseMove ax+200,ay-200
;return
;#m::
;MouseGetPos, ax, ay
;MouseMove ax-200,ay+200
;return
;#.::
;MouseGetPos, ax, ay
;MouseMove ax+200,ay+200
;return
;#,::
;MouseGetPos, ax, ay
;MouseClick,left,ax,ay
;return
;
;
;>+RIGHT::
;MouseGetPos, ax, ay
;MouseMove ax+10,ay
;return
;>+LEFT::
;MouseGetPos, ax, ay
;MouseMove ax-10,ay
;return
;>+UP::
;MouseGetPos, ax, ay
;MouseMove ax,ay-10
;return
;>+DOWN::
;MouseGetPos, ax, ay
;MouseMove ax,ay+10
;return

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;SC11D�� ����CTRL
;SC11D�� �ϳ� ����ؾ� ���� ��ɵ��� Ǯ����-_-;;
;SC11D::
;return

;SC11D & SC15C::
;MouseGetPos, ax, ay
;MouseClick,left,ax,ay
;return
;SC15C & SC11D::
;MouseGetPos, ax, ay
;MouseClick,left,ax,ay
;return

;SC11D & Right::
;MouseGetPos, ax, ay
;MouseMove ax+100,ay
;return
;SC11D & Left::
;MouseGetPos, ax, ay
;MouseMove ax-100,ay
;return
;SC11D & Up::
;MouseGetPos, ax, ay
;MouseMove ax,ay-100
;return
;SC11D & Down::
;MouseGetPos, ax, ay
;MouseMove ax,ay+100
;return

;���� ��, �ٿ�, ��Ʈ
;SC11D & Up::
;send, {vkAFsc130}
;return
;SC11D & Down::
;send, {vkAEsc12E}
;return
;SC11D & Left::
;send, {vkADsc120}
;return
; Note: From now on whenever you run AutoHotkey directly, this script
; will be loaded.  So feel free to customize it to suit your needs.

; Please read the QUICK-START TUTORIAL near the top of the help file.
; It explains how to perform common automation tasks such as sending
; keystrokes and mouse clicks.  It also explains more about hotkeys.

;Numpad1::
;send, {Left}
;return
;Numpad2::
;send, {Right}
;return

;Numpad4::
;send, {wheelUp}
;return
;Numpad3::
;send, {wheelDown}
;return

;Numpad6::
;Send {Volume_Up 2}
;return
;Numpad8::
;Send {Volume_Down 2}
;return

;Numpad7::
;send, {Ctrl down}{PgUp}{Ctrl up}
;return
;Numpad5::
;send, {Ctrl down}{PgDn}{Ctrl up}
;return

;Numpad9::
;send, {Alt down}{tab}{Alt up}
;return
;Numpad0::
;MouseClick,left
;return

!WheelUp::
Send {Volume_Up}
return
!WheelDown::
Send {Volume_Down}
;return
;!MButton::
;Send {Volume_Down 100}
;return

;backward, forward
;!LButton::
;Send {XButton1}
;return
;!RButton::
;Send {XButton2}
;return

