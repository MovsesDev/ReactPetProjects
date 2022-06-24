export const board = document.createElement('div')
board.style.width = '600px'

const img1 = document.createElement('img')
const img2 = document.createElement('img')
const img3 = document.createElement('img')
img1.src = 'img/1.jpg'
img2.src = 'img/2.jpg'
img3.src = 'img/3.jpg'


for(let i = 0; i < 9; i++) {
    const card = document.createElement('div')
    card.style.width = '33%'
    board.appendChild(card)
   
}
