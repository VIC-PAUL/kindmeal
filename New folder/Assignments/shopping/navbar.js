const user= document.querySelector(".user");
    const signinData=JSON.parse(localStorage.getItem("signin"));
    if(signinData != null){
       user.innerHTML=`<h2>  ${signinData.username.toUpperCase()} </h2>
            <h2> <a href="./cart.html"> Cart </a></h2>`;
    }