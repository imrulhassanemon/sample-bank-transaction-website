// // console.log("buddon")

// // step-1 add Eventhandaler 
// document.getElementById("loggin-btn").addEventListener("click", function(event){
//     // step-2 prevent the auto brawser reloding 
//     event.preventDefault(); //form submit reloading the page

//     // step-3 get the phone number 


//     const phoneNumber = document.getElementById("phone-number").value;
//     // console.log(phoneNumber)
    
//     // step-4 get the pin number 

//     const pinNumber = document.getElementById("pin-number").value;
//     console.log(pinNumber, phoneNumber)



// })




// new code for practice 


document.getElementById("loggin-btn").addEventListener("click", function(event){
    // step-1 stop browser relod
    event.preventDefault();

    // step-2 get the number 
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber)

    const pinNumber = document.getElementById("pin-number").value;
    console.log(pinNumber)


    // this phone number and pin number is temporarry bad way to validate the pin and pass
    if(phoneNumber === "5" && pinNumber === '123'){
        console.log("your pass is correct")
        window.location.href = "home.html"
    }else{
        alert("your mobail number or password is incorrect is incorrect please enter the valid pass or pin")
    }

})