// add money to the account 

document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    // get money 
    const amount = document.getElementById("amount").value;
    console.log(amount)

    // get password 
    const pass = document.getElementById("password").value;
    console.log(pass)
})