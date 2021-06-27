let computerGen = Math.floor(Math.random() * 15 + 1);
document.querySelector("#btn").onclick = function () {
    let userGen = document.querySelector("#userGuess").value;

    if (userGen == computerGen) {
        alert(`Awesome your number is ${userGen}`);
    }

    else if (computerGen - userGen === 1) {
        alert("try a higher number")
    }
        
    else if (userGen - computerGen === 1) {
        alert("try a lower number");
    }    
        
        

    else {
        alert(`oops! your number is ${userGen} and the correct number is ${computerGen}`);
    }
}



