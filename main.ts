input.onButtonPressed(Button.A, function () {
    nogges = 1
    while (nogges == 1) {
        basic.showIcon(IconNames.Yes)
        ledlopen()
    }
})
function stopledlopen () {
    strip.clear()
}
input.onButtonPressed(Button.B, function () {
    nogges = 0
    basic.showIcon(IconNames.No)
    stopledlopen()
})
function ledlopen () {
    for (let index = 0; index <= 23; index++) {
        strip.setBrightness(intensiteit)
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(23 - index, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(500)
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(23 - index, neopixel.colors(NeoPixelColors.Black))
        strip.show()
    }
}
// Doel: twee ledjes in tegengestelde richting laten lopen.
// De neopixel wordt ingesteld.
// Er zijn twee functies: "ledlopen" en "stopledlopen"
// 1) Knop A: ledjes in een loop laten rondlopen
// 2) Knop B: stoppen van de loop
let nogges = 0
let intensiteit = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.setBrightness(150)
intensiteit = 150
