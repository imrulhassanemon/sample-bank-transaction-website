// add money to the account 

document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    // get money 
    const amount = document.getElementById("amount").value;

    // get password 
    const pass = document.getElementById("password").value;

    // varify the pin number 
    if(pass === "123"){

        const totalAmount = document.getElementById("total-amount").innerText;
        const addMoneyInput = parseFloat(totalAmount)

        const blanceNumber = parseFloat(amount)
        const newBlance = blanceNumber + addMoneyInput;

        document.getElementById("total-amount").innerText = newBlance;

        amount.value = ''
        
    }else{
        alert("You enter wrong password")
    }

})