document.getElementById('add-money-cashout').addEventListener("click", function(event){
    event.preventDefault();
    
    // get the amount 
    const cashOut = document.getElementById("amount-cashout").value;
    const cash = parseFloat(cashOut);


    const pin = document.getElementById("pin-cashout").value;
    

    if(pin === "123"){

        const amount = document.getElementById('total-amount').innerText;
        // console.log(amount)
        const inputAmount = parseFloat(amount)
    
        const totalAmount = inputAmount - cash;
    
        document.getElementById("total-amount").innerText = totalAmount
    }else{
        alert("invalid password ! please enter the right password")
    }
})