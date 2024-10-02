window.onload = function () {
    var storedBalance = localStorage.getItem("balance");
    if (storedBalance !== null) {
        document.getElementById("balance").innerHTML = storedBalance;
    } else {
        localStorage.setItem("balance", 1000);  // Set default balance
        document.getElementById("balance").innerHTML = 1000;
    }
}

// funcion to reset balance

function resetBalance() {
    localStorage.setItem("balance", 1000);
    document.getElementById("balance").innerHTML = 1000;
}

// add event listener 
document.getElementById("resetBalance").addEventListener("click", resetBalance);
