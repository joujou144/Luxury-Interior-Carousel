let slidePosition = 0
const slides = document.getElementsByClassName("carousel-item")
const totalSlides = slides.length
const dots = document.getElementsByClassName("dot")

document.getElementById("next-btn").addEventListener("click", nextSlide)
document.getElementById("prev-btn").addEventListener("click", prevSlide)

activeDot()

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible")
    slide.classList.add("carousel-item-hidden")
  }
}

function activeDot() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "")
  }

  dots[slidePosition].classList.add("active")
}

function nextSlide() {
  hideAllSlides()

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0
  } else {
    slidePosition++
  }
  activeDot()
  slides[slidePosition].classList.add("carousel-item-visible")
 
}

function prevSlide() {
  hideAllSlides()

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1
  } else {
    slidePosition--
  }
  activeDot()
  slides[slidePosition].classList.add("carousel-item-visible")
}