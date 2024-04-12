const circle = document.querySelector('.circle')
window.addEventListener('mousemove',(e)=>{
    console.log(`clienX=${e.clientX}`)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
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
    } ,
    spaceBetween: 50

    // autoplay:{delay:3000}/
})



//네비
const nav =document.querySelector('.left_nav')
const nav_btn = document.querySelector('.nav_bar a')
const skill_all = document.querySelector('.skill')
const bg_2_wrap = document.querySelector('.bg_2_wrap .text_box')
const skill_contents = document.querySelectorAll('.skill_text .contents')
const bg3 =document.querySelector('.web_project')
const project_all =document.querySelector('.project_box')

console.log(skill_all)

for(let i of skill_contents){
    i.style.opacity = '0'
    i.style.transform = "translateX(-1000px)"
    window.addEventListener('scroll',()=>{
        if(skill_all.getBoundingClientRect().top <=900){
            bg_2_wrap.style.transform = "translateX(0)"
            bg_2_wrap.style.transition = "3s"
            bg_2_wrap.style.opacity ='1'
            i.style.opacity = '1'
            i.style.transform = "translateX(0)"
            i.style.transition = "4s"
        }
    })
}
bg_2_wrap.style.transform = "translateX(-1000px)"
bg_2_wrap.style.opacity ='0'

project_all.style.opacity = '0'

window.addEventListener('scroll',()=>{
    if(bg3.getBoundingClientRect().top <=900){
        project_all.style.opacity = '1'
        project_all.style.transition = "5s"
    }
})





const left_nav = document.querySelector('.left_nav')
const nav_bar =document.querySelector('.nav_bar')
left_nav.style.display = 'none'
let nav_result = true
nav_bar.addEventListener('click',(e)=>{
    nav_result = !nav_result
    console.log(nav_result)
    if(nav_result == false){
        left_nav.style.display = 'block'
    }else{
        left_nav.style.display = 'none'
    }
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
        menu.classList.toggle("active");
        left_nav.style.display = 'none'
        nav_result = true
    })
})






const skill_text = document.querySelector('.text_box p');
const skill_a = document.querySelectorAll('.img .contents a');
const skill_img =document.querySelector('.text_box a img')

console.log(skill_text)
let hidden_text = ['깃 허브를 통해 프로젝트 관리를<br> 할 수 있습니다','일러스트 프로그램을통해<br> 이미지 제작을 할 수 있습니다.','포토샵 작업을 통해<br>사진편집을 할 수 있습니다.','디자인 및 협업 및 와이어 프레임 제작을 할 수있습니다.','HTML를 유효성 문제 없이<br> HTML구조를 편성할 수 있습니다','CSS3 다양한 애니메이션 효과 및 <br>디자인구성을 편성 할 수 있습니다.','JS로 오류없이 다양한 동적기능을 <br>구현 가능합니다.','제이쿼리로 다양한 동적기능을<br>구현할 수 있습니다.','netlify를 이용해 프로젝트 관리를<br> 할 수 있습니다','React를 통해 동적기능을<br>추가할 수 있습니다.','php를 이용한 반복 및 웹페이지 제작이 가능합니다']

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



//텍스트


// 내 정보
const been_btn = document.querySelector('.been_link')
const been_page =document.querySelector('.name_birthday')
const rope = document.querySelector('.rope') 
been_page.style.transform = "translateY(-3000px)"
console.log(been_btn,been_page)
been_btn.addEventListener('click',()=>{
    been_page.style.transform = "translateY(0)"
    been_page.style.transition = "2s"
})
been_btn.addEventListener('mouseover',(e)=>{
    been_btn.style.transform = "translateY(-30px)"
    been_btn.style.transition = "2s"

})
been_btn.addEventListener('mouseout',(e)=>{
    been_btn.style.transform = "translateY(0)"
    been_btn.style.transition = "2s"
})

rope.addEventListener('click',(e)=>{
    e.preventDefault()
    been_page.style.transform = "translateY(-3000px)"
    been_page.style.transition = "2s"
})

const menu = document.querySelector(".menu");
menu.addEventListener('click',()=>{
    menu.classList.toggle("active");
})
