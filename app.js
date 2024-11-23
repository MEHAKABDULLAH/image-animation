const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timeClicked = 0
loveMe.addEventListener('click',(e) => {
    if(clickTime === 0){
        clickTime = new Date().getTime()
    }else{
        if((new Date().getTime() - clickTime) <800){
            creatHeart(e)
            clickTime = 0
        }else{
            clickTime = new Date().getTime()
        }
    }
})
    const creatHeart = (e)=>{
        const heart = document.createElement('i')
        heart.classList.add('fas')
        heart.classList.add('fa-heart')

        const x = e.clientx
        const y = e.clientx

        const leftoffset = e.target.offsetleft
        const toppffset = e.target.offsetTop

        const xInside = x - leftoffset
        const yInside = y - topoffset

        heart.style.top = x - leftoffset
        heart.style.left = y - topoffset

        heart.style.top = '${yInside}px'
            heart.style.left = '${xInside}px'

            loveMe.appendChild(heart)
            times.innerHTML= ++timeClicked
            setTimeout(() =>heart.remove(),1000)
    }
