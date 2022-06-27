const cardList = document.querySelectorAll(".card");
const win = document.querySelector(".win");
let hasFlipped = false;
let lockFlip = false;
let firstCard, secondCard;
let count = 0;
function flipCard(e) {
  console.log(this, e.currentTarget);
  if (lockFlip) return;
  if (this === firstCard) return;
  this.classList.add("flip");
  if (!hasFlipped) {
    hasFlipped = true;
    firstCard = this;
    return;
  }

  hasFlipped = false;
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetDoubleClick();
    count += 1;
    if (count === 3) {
      setTimeout(() => {
        win.innerHTML = "You won!!!";
      }, 300);
    }
  } else {
    lockFlip = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      lockFlip = false;
      resetDoubleClick();
    }, 1000);
  }
}

function resetDoubleClick() {
  [hasFlipped, lockFlip] = [false, false][(firstCard, secondCard)] = [
    null,
    null,
  ];
}

(function shuffle() {
  cardList.forEach(
    (card) => (card.style.order = Math.floor(Math.random() * cardList.length))
  );
})();

cardList.forEach((card) => card.addEventListener("click", flipCard));
