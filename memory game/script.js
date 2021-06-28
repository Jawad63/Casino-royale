const cards = document.querySelectorAll(".card");
let flippedCard = false;
let lockCard = false;
let firstCard, secondCard;

function flippy() {
   if (lockCard) return;
   if (this === firstCard) return;

   this.classList.add('flip');

   // here goes First click:
   if (!flippedCard) {
      flippedCard = true;
      firstCard = this;

      return;
   }
   
   // here goes second click:
   secondCard = this;
   
   checkForMatch();
}

function checkForMatch() {
   let isMatch = firstCard.dataset.animal === secondCard.dataset.animal;
   isMatch ? disableCards() : unflippedCards();
}

function disableCards() {
   firstCard.removeEventListener('click', flippy);
   secondCard.removeEventListener('click', flippy);

   resetCards();
}

function unflippedCards() {
   lockCard = true;

   setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetCards();
   }, 1500);
}

function resetCards() {
   [flippedCard, lockCard] = [false, false];
   [firstCard, secondCard] = [null, null];  
}

(function shuffle() {
   cards.forEach(card => {
      let random = Math.floor(Math.random() * 12);
      card.style.order = random;
   })
})();

cards.forEach(card => card.addEventListener('click' , flippy))