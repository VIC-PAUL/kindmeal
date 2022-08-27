// Store the wallet amount to your local storage with key "amount"
let wallet=document.getElementById("wallet")
let walletAmount=JSON.parse(localStorage.getItem("amount"))||0
wallet.innerText=walletAmount
let addMoney=()=>{
    let sum=JSON.parse(localStorage.getItem("amount"))
    let amount=document.getElementById("amount").value 
    sum=sum+Number(amount)
    localStorage.setItem("amount",sum)
    //console.log(sum)
    location.reload()
}
console.log(walletAmount)
let bookMovies=()=>{
    window.location.href="movies.html"
}