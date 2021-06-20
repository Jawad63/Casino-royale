const random = document.getElementById("random-input");
const user = document.getElementById("user-input");
const results = document.getElementById("result");
const possibilities = document.querySelectorAll("button");

let randomInput;
let userInput;
let result;

possibilities.forEach(possibilities => possibilities.addEventListener('click', (ev => {
   userInput = ev.target.id
   user.innerHTML = userInput;

   generaterandomInput()
   getResult()

})));

function generaterandomInput() {
   const randomNumber = Math.floor(Math.random() * 3 + 1);

   if (randomNumber === 1) {
      randomInput = "rock";
   }

   if (randomNumber === 2) {
      randomInput = "paper";
   }

   if (randomNumber === 3) {
      randomInput = "scissors"
   }
   random.innerHTML = randomInput
}

function getResult() {
   if (randomInput === userInput) {
      result = "It's a draw mate!";
   }

   if (randomInput === "rock" && userInput === "paper") {
      result = "you win  :)"
   }

   if (randomInput === "rock" && userInput === "scissors") {
      result = "you loose :("
   }

   if (randomInput === "paper" && userInput === "scissors") {
      result = "you win  :)"
   }

   if (randomInput === "paper" && userInput === "rock") {
      result = "you loose :("
   }

   if (randomInput === "scissors" && userInput === "rock") {
      result = "you win  :)"
   }

   if (randomInput === "scissors" && userInput === "paper") {
      result = "you loose :("
   }

   results.innerHTML = result;
}
