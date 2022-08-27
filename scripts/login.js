function do_login() {
  let email = document.querySelector("#login_email").value;
  let password = document.querySelector("#login_password").value;
  if (email && password) {
    let database = JSON.parse(localStorage.getItem("userInfo"));
    database.forEach((item) => {
      if (item.email == email && item.password === password) {
        localStorage.setItem("isLogin", true);
        localStorage.setItem("name", item.name);
        alert("Login Successfully");
        document.querySelector(".modalLogin").style.display = "none";
      } else {
        alert("Incorrect Details !");
      }
    });
  } else {
    alert("Incorrect Details !");
  }
}
console.log(localStorage.getItem("isLogin"));
setTimeout(() => {
  if (localStorage.getItem("isLogin") == "true") {
    document.querySelector("#nav1-child-3").style.display = "none";
    document.querySelector(".isLoggedIn #name").innerText = localStorage.getItem("name");
    document.querySelector(".isLoggedIn").style.display = "flex";
  }
}, 200);
