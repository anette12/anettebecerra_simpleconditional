let celsius = 0
basic.forever(function () {
    celsius = input.temperature()
    if (celsius == 10) {
        basic.showNumber(celsius)
        basic.showString("ski time")
    } else if (celsius == 20) {
        basic.showNumber(celsius)
        basic.showString("picnic time")
    } else if (celsius == 30) {
        basic.showNumber(celsius)
        basic.showString("beach time")
    } else if (celsius == 40) {
        basic.showNumber(celsius)
        basic.showString("it is better to stay at home")
    } else {
        basic.showNumber(celsius)
    }
})
