document.getElementById('login-btn').addEventListener('click',function(){
    const numberCheck = document.getElementById('number');
    const numberVlaue = numberCheck.value;
    const pinCheck = document.getElementById('pin');
    const pinValue = pinCheck.value;
    
    const validNum = "01785438758";
    const validPin = 1234;
    if(numberVlaue == validNum && pinValue == validPin){
        alert("Longin Success");
        window.location.assign("/home.html");
    }else{
        alert("Longin Failed");
        return;
    }

})