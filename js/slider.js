const dots = document.querySelectorAll(".dot")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const sliderContainer = document.querySelector(".slider-container")
let counter = 1
let timer

const showSlide = (counter) => {
    sliderContainer.style.backgroundImage = `url(../assets/slide/${counter}.jpg)`
}
const changeSlide = (n) => {
    counter += n
    if (counter < 1) {
        counter = 5
    } else if (counter > 5) {
        counter = 1
    }
    showSlide(counter)
}

setInterval(() => {
    dots.forEach((dot, index) => {
        if (index + 1 === counter) {
            dot.classList.add("active-dot")
        } else {
            dot.classList.remove("active-dot")
        }
    })
    if (!timer) {
        timer = setInterval(() => {
            changeSlide(1)
        }, 3000)
    }
}, 0);

dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
        clearInterval(timer)
        counter = index + 1
        showSlide(counter)
        timer = null
    })
})

next.addEventListener("click", () => {
    clearInterval(timer)
    changeSlide(1)
    timer = null
})

prev.addEventListener("click", () => {
    clearInterval(timer)
    changeSlide(-1)
    timer = null
})