function der_der_der_ () {
    basic.clearScreen()
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Black))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Indigo))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Black))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Black))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Black))
    out = randint(1, 12)
    if (out == 10) {
        myimg = images.createImage(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    } else if (out == 11) {
        myimg = images.createImage(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    } else if (out == 12) {
        myimg = images.createImage(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    }
    if (out > 9) {
        myimg.showImage(0)
    } else {
        basic.showNumber(out)
    }
    basic.clearScreen()
    basic.pause(200)
    if (out > 9) {
        myimg.showImage(0)
    } else {
        basic.showNumber(out)
    }
    music.playTone(1000, music.beat(BeatFraction.Eighth))
}
input.onSound(DetectedSound.Loud, function () {
    der_der_der_()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    der_der_der_()
})
let myimg: Image = null
let out = 0
input.setSoundThreshold(SoundThreshold.Loud, 85)
