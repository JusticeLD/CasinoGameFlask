// Function to update the slots game which does not use a balance
function updateSlotsGame() {
    // get balance and bet amount
    var balance = parseInt(document.getElementById("balance").innerHTML);
    var betAmount = parseInt(document.getElementById("betAmount").innerHTML);

    // get balance and bet amount values
    var balanceValue = parseInt(balance);
    var betAmountValue = parseInt(betAmount);

    // Get the slot machine elements
    var slot1 = document.getElementById("slot1");
    var slot2 = document.getElementById("slot2");
    var slot3 = document.getElementById("slot3");

    // Update the slot machine values
    slot1.innerHTML = Math.floor(Math.random() * 10);
    slot2.innerHTML = Math.floor(Math.random() * 10);
    slot3.innerHTML = Math.floor(Math.random() * 10);

    // Check if the player won
    if (slot1.innerHTML === slot2.innerHTML && slot2.innerHTML === slot3.innerHTML) {
        document.getElementById("result").innerHTML = "You won!";
        balanceValue += betAmountValue * 10;
    } else {
        document.getElementById("result").innerHTML = "You lost!";
        balanceValue -= betAmountValue;
    }

    // Update the balance and store it in localStorage
    document.getElementById("balance").innerHTML = balanceValue;
    localStorage.setItem("balance", balanceValue);
}

// Function to increase the bet amount
function increaseBet() {
    var betAmount = parseInt(document.getElementById("betAmount").innerHTML);
    document.getElementById("betAmount").innerHTML = betAmount + 5;
}

// Function to decrease the bet amount 
function decreaseBet() {
    var betAmount = parseInt(document.getElementById("betAmount").innerHTML);
    if (betAmount - 5 >= 0) {
        document.getElementById("betAmount").innerHTML = betAmount - 5;
    }
}

// Event listeners for buttons
document.getElementById("increaseBet").addEventListener("click", increaseBet);
document.getElementById("decreaseBet").addEventListener("click", decreaseBet);
document.getElementById("play").addEventListener("click", updateSlotsGame);

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
