const circle = document.querySelector('.circle')
window.addEventListener('mousemove',(e)=>{
    console.log(`clienX=${e.clientX}`)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
}) 



//네비
const nav =document.querySelector('.left_nav')
const nav_btn = document.querySelector('.nav_bar a')

nav.style.display = 'none'
nav_btn.addEventListener('click',(e)=>{
    e.preventDefault()
    nav.style.display = 'flex'
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
        nav.style.display='none'
        e.preventDefault()
        window.scrollTo(0,bg[`${index -1 }`].offsetTop)
    })
})

const close_btn =document.querySelector('.close a')
close_btn.addEventListener('.click',()=>{
    nav.style.display='none'
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

const show_more = document.querySelectorAll('.show_more')
const show_text = document.querySelectorAll('.show_text')
const show_close = document.querySelectorAll('.show_text img')
show_text.forEach((text,index)=>{
    text.style.opacity = '0'
    text.style.transition = 'opacity 0.4s ease-in-out';
    show_more[index].addEventListener('click',(e)=>{
        e.preventDefault()
        text.style.opacity = '1'; 
    })
    console.log(show_close[index])
    show_close[index].addEventListener('click',(e)=>{
        text.style.opacity = '0'; 
        e.preventDefault()
    })
})  

const figma = document.querySelectorAll('.planning')
figma.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()
        window.open('https://www.figma.com/file/d97P1f5xxpEmgM6TqXLsxs/2%EC%A1%B0-Wavve-%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=374%3A813&mode=design&t=GXwnZEFb5zmLlabM-1','_blank')
    })
})
const git =document.querySelectorAll('.git')
git.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        window.open ('https://github.com/EunsungGIT/TeanProjectWavve.git','_blank')
    })
})



//스와이프
let slide = new Swiper('.benner_main',{
    slidesPerView: 1,
    // autoplay:{delay:3000}
})