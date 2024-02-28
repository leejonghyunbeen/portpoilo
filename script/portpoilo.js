const circle = document.querySelector('.circle')
window.addEventListener('mousemove',(e)=>{
    // console.log(`sceenX=${e.screenX}clienX=${e.clientX}`)
    //  스크린은 모니터 클라이언트는 보이는 화면 기준
    // console.log(`clienX=${e.clientX}`)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
}) 

