
document.getElementById("cashout-btn").addEventListener('click',function(){
    //get the agent number & validate
    const cashoutNumber = getValueFromInput("cashout-number");
        if(cashoutNumber.length !=11){
        alert("Invalid Agent Number");
        return;
    }
    //     // get the amount 
    const cashoutAmount = getValueFromInput("cashout-amount");
        if(cashoutAmount<=0){
            alert("Input Your Amount");
            return;
        }
    //calculate new balance
    const currentBalance = getBalance();
    const newBalance = currentBalance-Number(cashoutAmount);

        if(newBalance<0){
        alert("Invalid Amount");
        return;
    }
        console.log(newBalance);

    //get the pin
    const pin = getValueFromInput("cashout-pin");
        if(pin == "1234"){
        // show alert and set balance 
        alert("Cashout SuccessFully");
        setBalance(newBalance);



        //get history-container
        const history = document.getElementById("history-container");
        //create new div
        const newHistory = document.createElement("div");
        //new div innerHTML add
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-md">
                Cashout ${cashoutAmount} Taka Success to ${cashoutNumber} at ${new Date()}
            </div>
        `;
        // add new history to the history container
        history.append(newHistory);

    }else{
        alert("Invalid Pin Number");
        return;
    }
})





// document.getElementById('cashout-btn').addEventListener('click',function(){
//     // get the agent number 
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     if(cashoutNumber.length !=11){
//         alert("Invalid Agent Number");
//         return;
//     }

//     // get the amount 
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     if(cashoutAmount<=0){
//         alert("Input Your Amount");
//         return;
//     }

//     // get the current balance 
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;

//     //calculate new balance
//     const newBalance = Number(balance)-Number(cashoutAmount);

//     if(newBalance<0){
//         alert("Invalid Amount");
//         return;
//     }
//     //get the pin with validation
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const cashoutPin = cashoutPinInput.value;
//     if(cashoutPin == "1234"){
//         // show alert and set balance 
//         alert("Cashout SuccessFully");
//         console.log("New Balance", newBalance);
//         balanceElement.innerText = newBalance;
//     }else{
//         alert("Invalid Pin Number");
//         return;
//     }

// })