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
    }else{
        alert("Invalid Pin");
        return;
    }

})