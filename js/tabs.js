const firstTabTitle = document.querySelector(".first-tab-title")
const secondTabTitle = document.querySelector(".second-tab-title")
const firstTab = document.querySelector(".first-tab")
const secondTab = document.querySelector(".second-tab")

firstTabTitle.addEventListener("click", () => {
    secondTabTitle.classList.remove("active-title")
    secondTab.classList.remove("active-tab")
    firstTab.classList.add("active-tab")
    firstTabTitle.classList.add("active-title")
})

secondTabTitle.addEventListener("click", () => {
    firstTabTitle.classList.remove("active-title")
    firstTab.classList.remove("active-tab")
    secondTab.classList.add("active-tab")
    secondTabTitle.classList.add("active-title")
})