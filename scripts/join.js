document.querySelector(".logo").addEventListener("click", () => {
  window.location.href = "join.html";
});

let database =
  JSON.parse(localStorage.getItem("userInfo")) == null
    ? []
    : JSON.parse(localStorage.getItem("userInfo"));
function signUp() {
  let z = [...document.querySelectorAll(".ww_form_text")];
  let isErrorToShow = false;
  delete z[z.length - 1];
  z.forEach((item) => {
    if (
      item.value == undefined ||
      document.querySelector("#result_valid").style.display == "none"
    ) {
      isErrorToShow = true;
      console.log(item);
    } else if (item.value.trim() == "") {
      isErrorToShow = true;
      console.log(item);
    }
  });
  if (isErrorToShow) {
    alert("Fill All Values Carefully !");
  } else {
    let email = document.querySelector("#ww_join_email").value;
    let password = document.querySelector("#ww_join_password").value;
    let name = document.querySelector('#ww_join_firstname').value;
    if(!name) name = 'Test';
    let obj = {
      email,
      password,
      name,
    };
    database.push(obj);
    localStorage.setItem("userInfo", JSON.stringify(database));
    alert("Registered Succesfully !");
    location.reload();
  }
}

function checkUserPath() {
  let username = document.querySelector('input[name="ww_join_username"]').value;
  document.querySelector("#check_user").innerText = username
    ? username
    : "Username";
  if (username.length > 4) {
    document.querySelector("#result_valid").style.display = "block";
  } else {
    document.querySelector("#result_valid").style.display = "none";
  }
}
