input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
        basic.pause(2000)
        basic.clearScreen()
    }
})
