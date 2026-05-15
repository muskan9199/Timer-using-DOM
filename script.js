var btn = document.querySelector(`button`)
var h2 = document.querySelector(`h2`)
var inner = document.querySelector(`.inner`)

var grow = 0;

btn.addEventListener(`click`, () => {

    btn.style.pointerEvents = `none`
    btn.style.opacity = `0.5`

    var num = 50 + Math.random() * 50;

    var int = setInterval(() => {

        grow++;

        let value = Math.floor((num * grow) / 100);

        h2.innerHTML = value + `%`
        inner.style.width = value + `%`

        if (grow >= 100) {
            clearInterval(int)
        }

    }, 50);

})