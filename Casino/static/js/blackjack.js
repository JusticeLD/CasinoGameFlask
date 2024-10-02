
// Initialize the balance from localStorage when the page loads
window.onload = function () {
    var storedBalance = localStorage.getItem("balance");
    if (storedBalance !== null) {
        document.getElementById("balance").innerHTML = storedBalance;
    } else {
        localStorage.setItem("balance", 1000);  // Set default balance
        document.getElementById("balance").innerHTML = 1000;
    }
};


document.addEventListener("DOMContentLoaded", function () {
    // Initiate the game
    function play() {
        // get ids 
        var playerHand = document.getElementById("player-cards");
        var dealerHand = document.getElementById("dealer-cards");
        var dealerScore = document.getElementById("dealer-score");
        var playerScore = document.getElementById("player-score");

        //update with random numbers
        playerHand.innerHTML = Math.floor(Math.random() * 10) + 1;
        dealerHand.innerHTML = Math.floor(Math.random() * 10) + 1;
        playerScore.innerHTML = parseInt(playerHand.innerHTML);
        dealerScore.innerHTML = parseInt(dealerHand.innerHTML);
        getElementById("result").innerHTML = " "

        // take bet amount from balance 
        var balance = parseInt(document.getElementById("balance").innerHTML);
        var betAmount = parseInt(document.getElementById("betAmount").innerHTML);
        var balanceValue = parseInt(balance);
        var betAmountValue = parseInt(betAmount);
        balanceValue -= betAmountValue;
        document.getElementById("balance").innerHTML = balanceValue;
        localStorage.setItem("balance", balanceValue);

    }

    // Event listener for play button
    document.getElementById("play").addEventListener("click", play);
});

function hit() {
    // get ids 
    var playerHand = document.getElementById("player-cards");
    var playerScore = document.getElementById("player-score");

    //update with random numbers
    var card = Math.floor(Math.random() * 10) + 1;
    playerHand.innerHTML += " " + card;
    playerScore.innerHTML = parseInt(playerScore.innerHTML) + card;

    // check if player busts
    if (parseInt(playerScore.innerHTML) > 21) {
        document.getElementById("result").innerHTML = "You lost!";
    }

    // check if player hits 21
    if (parseInt(playerScore.innerHTML) == 21) {
        document.getElementById("result").innerHTML = "You won!";
    }
}

// add event listener for hit button
document.getElementById("hit").addEventListener("click", hit);

function stand() {
    // get ids
    var dealerHand = document.getElementById("dealer-cards");
    var dealerScore = document.getElementById("dealer-score");
    var playerscore = document.getElementById("player-score");

    // update cards until 16 reached or bust 
    var card = Math.floor(Math.random() * 10) + 1;
    dealerHand.innerHTML += ' ' + card;
    dealerScore.innerHTML = parseInt(dealerScore.innerHTML) + card;
    while (dealerScore.innerHTML < 16) {
        ;
        stand();
    }
    if (dealerScore.innerHTML > 21) {
        document.getElementById("result").innerHTML = "You Won!!";
    }
    if (dealerScore.innerHTML < playerscore.innerHTML) {
        document.getElementById("result").innerHTML = "You Won!!";
    }
}

// add event listener 
document.getElementById("stand").addEventListener("click", stand);