const programmingLanguages = [
  "python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"css",
	"c",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
	"ruby"
]
const button = document.getElementById('keyboard')
const word = document.getElementById('word')
const mistake = document.getElementById('mistakes') 
const maxMistake = document.getElementById('maxMistakes')


let mistakes = 0
let maxMistakes = 6
mistake.innerHTML = mistakes
maxMistake.innerHTML = maxMistakes

let answer = programmingLanguages[Math.floor(Math.random() * (programmingLanguages.length - 1))]
let guessed = []
let wordStatus = null

function generateButtons() {
    const buttons = 'abcdefghijklmnopqrstuvwxyz'
    button.innerHTML = buttons.split('').map(letter =>
        `
        <button
      class="btn btn-lg btn-primary m-1"
      id='` + letter + `'
      onClick="handleGuess('` + letter + `')"
      >
      ` + letter + `
      </button>`
      ).join('')
    }
    
    function handleGuess(chosenLetter) {
      guessed.indexOf(chosenLetter) === -1 && guessed.push(chosenLetter)
      document.getElementById(chosenLetter).setAttribute('disabled', true)
      
      if(answer.indexOf(chosenLetter) >= 0) {
        generateWord()
        checkIfWon()
      } else {
        updateMistakes()
      }
    }
    function generateWord() {
      wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : ' _ ')).join('');
      word.innerHTML = wordStatus;
    }
    
    function updateMistakes() {
      mistakes++
  mistake.innerHTML = mistakes
  document.querySelector('img').src = `./img/${mistakes}.jpg`
  if(mistakes === maxMistakes) {
    button.innerHTML = 'You Lose'
  } 
}


function checkIfWon() {
  if ( wordStatus === answer) {
    button.innerHTML = 'You Won'
  }
}

function reset() {
  answer = programmingLanguages[Math.floor(Math.random() * (programmingLanguages.length - 1))]
  document.querySelector('img').src = './img/0.jpg';
  mistakes = 0;
  mistake.innerHTML = mistakes
  guessed = [];
  generateWord()
  generateButtons();
}
generateWord()
generateButtons()
