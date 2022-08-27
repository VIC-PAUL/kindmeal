// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page\
let wallet=document.getElementById("wallet")
let amount=JSON.parse(localStorage.getItem("amount"))
wallet.innerText=amount

let searchMovies=async()=>{
    let query=document.getElementById("search").value 
    let data=await getData(query)
    console.log(data)
    appendData(data)
}

let getData=async(query)=>{
    let url=`http://www.omdbapi.com/?i=tt3896198&apikey=cdc330b1&s=${query}`
    let res=await fetch(url)
    let info=await res.json()
    //console.log(info)
    return info.Search
}

let appendData=(data)=>{
    let container=document.getElementById("movies")
     data.forEach((el)=>{
        let box=document.createElement("div")
        box.setAttribute("class","movie_tab")
        let image=document.createElement("img")
        image.src=el.Poster 
        let title=document.createElement("h3")
        title.innerText=el.Title 
        let book=document.createElement("button")
        book.innerText="book now"
        book.setAttribute("class","book_now")
        book.addEventListener("click",function(){
            bookMovies(el)
        })

        box.append(image,title,book)
        container.append(box)
     })
}

let bookMovies=(el)=>{
    localStorage.setItem("movie",JSON.stringify(el))
    window.location.href="checkout.html"
}



let id
let debounce=(func,delay)=>{
if(id){
    clearTimeout(id)
}

 id=setTimeout(function(){
    func()
},delay)
}
