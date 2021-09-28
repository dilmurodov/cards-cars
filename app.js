const slides = document.querySelectorAll('.slide')

for(const slide of slides){
    slide.addEventListener('click', ()=>{
        clearLaterSlide()
        slide.classList.add('active')
    })
}
function clearLaterSlide(){
    slides.forEach( (slide)=>{
        slide.classList.remove('active')
    })
}
