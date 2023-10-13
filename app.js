let imgs = ["https://picsum.photos/id/67/200/200","https://picsum.photos/id/64/200/200","https://picsum.photos/id/60/200/200","https://picsum.photos/id/59/200/200" ,"https://picsum.photos/id/58/200/200"]


let phots = document.querySelectorAll(".images img")
let circle = document.querySelectorAll(".wrapper div")

phots[0].setAttribute("src", imgs[0])

phots[0].addEventListener('click', () => {
    let getimg = phots[0].getAttribute("src")
    circle[0].style.background = `url(${getimg})`
})
phots[1].setAttribute("src" ,imgs[1] )
phots[1].addEventListener('click', () =>{
    let getImg = phots[1].getAttribute("src")
    circle[1].style.background = `url(${getImg})`

})
phots[2].setAttribute("src", imgs[2])
phots[2].addEventListener('click', () =>{
    let olimg = phots[2].getAttribute("src")
    circle[2].style.background = `url(${olimg})`
})
phots[3].setAttribute("src", imgs[3])
phots[3].addEventListener('click', () =>{
    let olImg = phots[3].getAttribute("src")
    circle[3].style.background = `url(${olImg})`
})
phots[4].setAttribute("src", imgs[4])
phots[4].addEventListener('click', () =>{
    let bimg = phots[4].getAttribute("src")
    circle[4].style.background = `url(${bimg})`
})