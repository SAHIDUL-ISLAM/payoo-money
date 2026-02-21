document.getElementById("add-money-btn").addEventListener("click",function(){
    //get bank name
    const bankAccount = getValueFromInput("add-money-bank");
    if(bankAccount == "Select A Bank"){
        alert("Please Select A Bank");
        return;
    }

    //get bank account number
    const accno = getValueFromInput("add-money-number");
    if(accno.length != 11){
        alert("Invalid Account Number");
        return;
    }
    //get amount
    const amount = getValueFromInput("add-money-amount");
    if(amount<=0){
        alert("Enter your Amount of Money");
        return;
    }
    const currentBalance = getBalance();
    const newBalance = currentBalance +Number(amount);

    const pin = getValueFromInput("add-money-pin");
    if(pin == "1234"){
        alert(`Add Money Success from ${bankAccount} 
        at ${new Date()}`);
        setBalance(newBalance);

        //get history-container
        const history = document.getElementById("history-container");
        //create new div
        const newHistory = document.createElement("div");
        //new div innerHTML add
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-md">
                Add Money Success from ${bankAccount}, Account No: ${accno} at ${new Date()}
            </div>
        `;
        // add new history to the history container
        history.append(newHistory);


    }else{
        alert("Invalid Pin");
        return;
    }

})