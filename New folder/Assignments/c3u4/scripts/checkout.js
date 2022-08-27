// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let wallet=document.getElementById("wallet")
let amount=JSON.parse(localStorage.getItem("amount"))
wallet.innerText=amount

let confirmBooking=()=>{
    let name=document.getElementById("user_name").value 
    let seat=document.getElementById("number_of_seats").value 
    let value=seat*100
   

    if(value>amount){
        alert("Insufficient Balance !")
    }
    else{
        let walletValue=JSON.parse(localStorage.getItem("amount"))-(value)
        localStorage.setItem("amount",walletValue)
        location.reload()
        alert("Booking Successful!")
    }
}

let movie=JSON.parse(localStorage.getItem("movie"))
let container=document.getElementById("movie")
let title=document.createElement("h3")
title.innerText=movie.Title 
let poster=document.createElement("img")
poster.src=movie.Poster 

container.append(title,poster)
