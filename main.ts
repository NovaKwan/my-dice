input.onSound(DetectedSound.Loud, function () {
    basic.showNumber(randint(1, 6))
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
input.setSoundThreshold(SoundThreshold.Loud, 85)
