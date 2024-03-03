const circle = document.querySelector('.circle')
window.addEventListener('mousemove',(e)=>{
    console.log(`clienX=${e.clientX}`)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
}) 




const start_animation = document.querySelector('.start_animation')
const click = document.querySelector('.click')
start_animation.addEventListener('click',()=>{
    start_animation.style.transform = 'translateY(100%)'
})

const wavve= document.querySelectorAll('.wavve_link')
console.log(wavve)
for(let i of wavve){
    i.addEventListener('click',(e)=>{
        window.open('http://eunsung00.dothome.co.kr/','_blank')
        e.preventDefault()
    })
}

const nav_a = document.querySelectorAll('.left_nav a')
const bg=document.querySelectorAll('.bg')
bg.forEach((obj,index)=>{
    console.log(bg[index].offsetTop)
})
nav_a.forEach((obj,index)=>{
    obj.addEventListener('click',(e)=>{
        e.preventDefault()
        window.scrollTo(0,bg[index].offsetTop)
    })
})

const skill_text = document.querySelectorAll('.img .contents p');
const skill_a = document.querySelectorAll('.img .contents a');

skill_text.forEach((text, index) => {
    text.style.opacity = '0'; 
        text.style.transition = 'opacity 0.4s ease-in-out'; 

    skill_a[index].addEventListener('mouseover', () => {
        text.style.opacity = '1'; 
    });

    skill_a[index].addEventListener('mouseout', () => {
        text.style.opacity = '0'; 
    });
    skill_a[index].addEventListener('click', (e) => {
        e.preventDefault()
    });
});


//스크롤


// /* 스와이프 */
// let slide = new Swiper('.web_project',{
//     slidesPerView: 1,
// })



let slide = new Swiper('.benner_main',{
    slidesPerView: 1,
    autoplay:{delay:3000}
})