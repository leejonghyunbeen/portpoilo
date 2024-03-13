const circle = document.querySelector('.circle')
window.addEventListener('mousemove',(e)=>{
    console.log(`clienX=${e.clientX}`)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
}) 



//네비
const nav =document.querySelector('.left_nav')
const nav_btn = document.querySelector('.nav_bar a')

const start_animation = document.querySelector('.start_animation')
const click = document.querySelector('.click')
start_animation.addEventListener('click',()=>{
    start_animation.style.transform = 'translateY(-100%)'
})









const wavve= document.querySelectorAll('.wavve_link')
console.log(wavve)

let fianal = ['https://yunaweb.pe.kr/wave_frontend24/#','https://calvinkleinkorea.netlify.app/']
wavve.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()
        window.open(fianal[index],'_blank')
    })
})


const nav_a = document.querySelectorAll('.left_nav a')
const bg=document.querySelectorAll('.bg')
bg.forEach((obj,index)=>{
    console.log(bg[index].offsetTop)
})
nav_a.forEach((obj,index)=>{
    obj.addEventListener('click',(e)=>{
        // nav.style.display='none'
        e.preventDefault()
        window.scrollTo(0,bg[`${index}`].offsetTop)
    })
})




const title_header = document.querySelector('.header_title a')
window.addEventListener('scroll', function () {
    // 현재 스크롤 위치 가져오기
    let scroll_text = window.scrollY;

    nav_a.forEach((target,index)=>{
        if (scroll_text >= 870) {
            target.style.color = '#000';
            title_header.style.color = '#000'
        }
        else{
            target.style.color = ''
            title_header.style.color = ''
        }
        if(scroll_text >= 2719){
            target.style.color = '#fff';
            title_header.style.color = '#fff'
        }
    })
});

const skill_text = document.querySelector('.text_box p');
const skill_a = document.querySelectorAll('.img .contents a');
const skill_img =document.querySelector('.text_box a img')

console.log(skill_text)
let hidden_text = ['깃 허브를 통해 프로젝트 관리를<br> 할 수 있습니다','일러스트 프로그램을통해<br> 이미지 제작을 할 수 있습니다.','포토샵 작업을 통해<br>사진편집을 할 수 있습니다.','피그마 프로그램을 통해<br>디자인 및 협업 및 와이어 프레임 제작을 할 수있습니다.','HTML를 유효성 문제 없이<br> HTML구조를 편성할 수 있습니다','CSS3 다양한 애니메이션 효과 및 <br>디자인구성을 편성 할 수 있습니다.','JS로 오류없이 다양한 동적기능을 <br>구현 가능합니다.','제이쿼리로 다양한 동적기능을<br>구현할 수 있습니다.','netlify를 이용해 프로젝트 관리를<br> 할 수 있습니다','React를 통해 동적기능을<br>추가할 수 있습니다.','php를 이용한 반복 및 웹페이지 제작이 가능합니다']

let hidden_img = ["./rogo/git.png","./rogo/image 6.png","./rogo/image 7.png","./rogo/klipartz.com (2).png","./rogo/html-5.png","./rogo/free-icon-css-3-5968242.png","./rogo/javascript-39394.png","./rogo/klipartz.com.png","./rogo/Netlify-900x0.png","./rogo/react-removebg-preview.png","./rogo/php.png"
]

skill_a.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()
        skill_text.innerHTML = hidden_text[index]
        skill_img.src = hidden_img[index]
    })
})



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
let figma_link = ['https://www.figma.com/file/d97P1f5xxpEmgM6TqXLsxs/2%EC%A1%B0-Wavve-%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=374%3A813&mode=design&t=GXwnZEFb5zmLlabM-1','https://www.figma.com/file/3FDA2pAGyLgLHFYWBmcoKA/Untitled?type=whiteboard&node-id=0%3A1&t=6w37zUq7cFU7v8ss-1']
const figma = document.querySelectorAll('.planning')
figma.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()
        window.open(figma_link[index],'_blank')
    })
})

let git_link =['https://github.com/EunsungGIT/TeanProjectWavve.git','https://github.com/leejonghyunbeen/calvinklein']
const git =document.querySelectorAll('.git_1')
git.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        window.open (git_link[index],'_blank')
    })
})



//스와이프
let slide = new Swiper('.benner_main',{
    slidesPerView: 1,
    pagination:{
        el:'.swiper-pagination'
    }
    // autoplay:{delay:3000}/
})

//텍스트

const content = "도전을 두려워하지않고 노력하며 쟁취하는성장형 신입 프론트앤드 입니다!";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 130)


show_more[1].addEventListener('click',(e)=>{
    e.preventDefault()
    window.alert('제작중입니다.')
    show_text[1].style.opacity = '0'
})