const modalImage = document.querySelector(".modal-img")
const modal = document.querySelector(".modal")
const icons = document.querySelectorAll(".icon")
const images = document.querySelectorAll(".project-img")

modal.addEventListener("click", function (e) {
    if (e.target !== modalImage) {
        this.classList.remove("opened-modal")
    }
})

icons.forEach((item) => {
    item.addEventListener("click", (e) => {
        let openedImageSrc = e.target.parentNode.parentNode.children[0].getAttribute("src")
        modalImage.setAttribute("src", `${openedImageSrc}`)
        modal.classList.add("opened-modal")
    })
})