const slides = document.querySelectorAll('.slide')

for(const slide of slides) {
  slide.addEventListener('click', () => {
    document.body.style = slide.getAttribute('style')
    clearActiveClasses()
    slide.classList.toggle('active')
  })
}

function clearActiveClasses() {
  slides.forEach(slide => slide.classList.remove('active'))
}