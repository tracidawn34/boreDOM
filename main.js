let paragraph = document.querySelector('p')
paragraph.style.color = "aqua"
paragraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna a libero interdum posuere. Donec vitae aliquet sapien. Vivamus sagittis erat a lacus tincidunt, vel feugiat odio ultrices."

let heading = document.querySelector('h1')
heading.style.font = '42px'

let listItem = document.querySelectorAll('li')
listItem[12].style.opacity = "30%"
listItem[2].innerHTML = "Greetings!"


let image = document.querySelector('img')
image.src = "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="
image.style.height = '250px'


let imgDiv = document.querySelector('.imgDiv')
imgDiv.innerHTML = "https://tse2.mm.bing.net/th?id=OIP.TqCbovmLULy2o-akEijiPAHaHZ&pid=Api&P=0&h=220"
document.querySelectorAll('img')[2].style.height = '280px'

document.querySelectorAll('li')[16].classList.add('item')

//let seventeen = document.querySelectorAll('li')[16]
//seventeen.classList.add
listItem[16].innerHTML = "Never gonna give you up."