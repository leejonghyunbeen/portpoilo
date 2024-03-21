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
// const click = document.querySelector('.click')
// start_animation.addEventListener('click',()=>{
//     start_animation.style.transform = 'translateY(-100%)'
// })









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
        if(scroll_text >= 1319){
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

let git_figma =['https://www.figma.com/file/d97P1f5xxpEmgM6TqXLsxs/2%EC%A1%B0-Wavve-%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=374%3A813&mode=design&t=GXwnZEFb5zmLlabM-1','https://github.com/leejonghyunbeen/calvinklein']

let web_site = ['https://yunaweb.pe.kr/wave_frontend24/#','https://calvinkleinkorea.netlify.app/']
const git_link = document.querySelectorAll ('.git')
const web_link =document.querySelectorAll('.web_link')

web_link.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()
        window.open(web_site[index],'_blank')
    })
})
git_link.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()
        window.open(git_figma[index],'_blank')
    })
})


//스와이프
let slide = new Swiper('.project_box',{
    slidesPerView: 1,
    pagination:{
        el:'.swiper-pagination'
    },    
    navigation:{
        nextEl:'.project_box .swiper-button-next',
        prevEl:'.project_box .swiper-button-prev',
    }

    // autoplay:{delay:3000}/
})

//텍스트

const content = " 소통을 좋아하고 도전을 즐기는 프론트엔드 이종현빈 입니다.";
const text = document.querySelector(".text");
let i = 0;


function typing(){
    if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
    }
}
setInterval(typing, 100)

