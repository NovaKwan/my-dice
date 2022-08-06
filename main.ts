input.onSound(DetectedSound.Loud, function () {
    basic.showString("_")
    basic.showNumber(randint(1, 6))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("-")
    basic.showNumber(randint(1, 6))
})
input.setSoundThreshold(SoundThreshold.Loud, 85)
