let out = 0
let myimg: Image = null
function mysoundtrigged () {
    input.onSound(DetectedSound.Loud, function (){})
der_der_der_()
    input.onSound(DetectedSound.Loud, mysoundtrigged)
}
input.onSound(DetectedSound.Loud, function () {
    mysoundtrigged()
})
input.onGesture(Gesture.Shake, function () {
    der_der_der_()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    der_der_der_()
})
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
    if (out == 1) {
        myimg = images.createImage(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (out == 2) {
        myimg = images.createImage(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (out == 3) {
        myimg = images.createImage(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (out == 4) {
        myimg = images.createImage(`
            . . # # .
            . # . # .
            # # # # #
            . . . # .
            . . . # .
            `)
    } else if (out == 5) {
        myimg = images.createImage(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (out == 6) {
        myimg = images.createImage(`
            . # # # #
            . # . . .
            . # # # #
            . # . . #
            . # # # #
            `)
    } else if (out == 7) {
        myimg = images.createImage(`
            . # # # #
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            `)
    } else if (out == 8) {
        myimg = images.createImage(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (out == 9) {
        myimg = images.createImage(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
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
    myimg.showImage(0)
    basic.clearScreen()
    basic.pause(200)
    myimg.showImage(0)
    music.playTone(1000, music.beat(BeatFraction.Eighth))
}
