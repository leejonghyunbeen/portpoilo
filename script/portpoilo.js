const circle = document.querySelector('.circle')
window.addEventListener('mousemove',(e)=>{
    // console.log(`sceenX=${e.screenX}clienX=${e.clientX}`)
    //  스크린은 모니터 클라이언트는 보이는 화면 기준
    // console.log(`clienX=${e.clientX}`)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
}) 

// const popup = document.querySelector('.nav_popup')
// const popup_btn = document.querySelector('header .img')
// const close_btn =document.querySelector('.title .img a')
// const close_img =document.querySelector('.title .img a img')
// const title = document.querySelector('.first_menu h2')
// console.log(title)
// console.log(popup_btn)
// popup.style.display = 'none'
// popup_btn.addEventListener('click',()=>{
//     popup.style.display = 'block'
// })
// close_btn.addEventListener('click',()=>{
//     popup.style.display = 'none'
// })
// close_btn.addEventListener('mouseover',()=>{
//     close_img.src = './images/close.png'
// })
// close_btn.addEventListener('mouseout',()=>{
//     close_img.src = './images/close_a5a5a5.png'
// })



// title.addEventListener('mousemove', function (e) {
//     const tiltX = (e.clientX / window.innerWidth - 0.5) * 1800; 
//     title.style.transform = `perspective(1000px) rotateY(${tiltX}deg)`;
//     title.style.transition = '3s'
// });

const start_animation = document.querySelector('.start_animation')
const click = document.querySelector('.click')
click.addEventListener('click',()=>{
    start_animation.style.transform = 'translateY(100%)'
})