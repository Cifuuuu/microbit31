let x = 0
basic.forever(function () {
    x = 0
    led.toggle(1, 1)
    led.toggle(3, 1)
    led.toggle(0, 3)
    for (let index = 0; index < 5; index++) {
        led.toggle(x, 4)
        x += 1
    }
    led.toggle(4, 3)
    basic.pause(5000)
})
