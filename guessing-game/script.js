let computerGen = Math.floor(Math.random() * 15 + 1);
document.querySelector("#btn").onclick = function () {
    let userGen = document.querySelector("#userGuess").value;

    if (userGen == computerGen) {
        alert(`Awsome your number is ${userGen}`);
    }

    else {
        alert(`oops! your number is ${userGen} and the correct number is ${computerGen}`);
    }
}



