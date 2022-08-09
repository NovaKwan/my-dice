def on_sound_loud():
    basic.show_string("_")
    basic.show_number(randint(1, 6))
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_gesture_shake():
    basic.show_string("-")
    basic.show_number(randint(1, 6))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

input.set_sound_threshold(SoundThreshold.LOUD, 85)