let arr = JSON.parse(localStorage.getItem("dats")) || [];

let cont = document.getElementById("cont4");

display(arr);
function display(arr) {
  let div = document.createElement("div");
  div.id = "div";

  let name = document.createElement("h2");
  name.innerText = arr.Name;
  name.id = "name";
  name.style.paddingTop = "30px";

  let details = document.createElement("h4");
  details.innerText = arr.Details;
  if (arr.Details == undefined) {
    details.innerText = null;
    details.style.display = "none";
  }
  details.style.fontWeight = "400";
  details.style.borderBottom = "1px solid rgb(199, 198, 198)";
  details.style.paddingBottom = "20px";

  let address = document.createElement("h4");
  address.innerText = arr.Address;
  address.id = "address";

  let phone = document.createElement("h4");
  phone.innerText = arr.Phone;
  phone.id = "phone";

  let hours = document.createElement("h4");
  hours.innerText = arr.Openinghours;
  hours.id = "hours";

  let iframe = document.createElement("iframe");
  iframe.id = "frame";
  iframe.src = arr.iframe;
  iframe.style.height = "400px";

  let add = document.createElement("h3");
  add.innerText = "Address";
  add.id = "add";

  let ph = document.createElement("h3");
  ph.innerText = "Phone";
  ph.id = "ph";

  let oh = document.createElement("h3");
  oh.innerText = "Opening Hours";
  oh.id = "oh";

  let div1 = document.createElement("div");
  div1.id = "div1";

  let directions = document.createElement("a");
  directions.innerText = "Get Directions";
  directions.href = arr.link;
  directions.style.marginRight = "0";
  directions.style.textDecoration = "none";
  directions.style.backgroundColor = "#04be5a";
  directions.style.color = "white";
  directions.style.padding = "10px 25px 10px 25px";
  directions.style.borderRadius = "8px";

  let deals = document.createElement("a");
  deals.innerText = "Get KindMeal Deals";
  deals.href = "";
  deals.style.textDecoration = "none";
  deals.style.backgroundColor = "#f53838";
  deals.style.color = "white";
  deals.style.padding = "10px 15px 10px 15px";
  deals.style.borderRadius = "8px";

  div1.append(deals, directions);
  div.append(name, details, add, address, ph, phone, oh, hours, iframe, div1);
  document.getElementById("cont4").append(div);
}

let tab1 = document.getElementById("tab1");
tab1.addEventListener("click", show);
function show() {
  window.location.href = "directory.html";
}
let tab2 = document.getElementById("tab2");
tab2.addEventListener("click", show1);
function show1() {
  window.location.href = "Featured Restaurants.html";
}

let tab3 = document.getElementById("tab3");
tab3.addEventListener("click", show2);
function show2() {
  window.location.href = "Food Menu.html";
}

let tab4 = document.getElementById("tab4");
tab4.addEventListener("click", show3);
function show3() {
  window.location.href = "Food Map.html";
}
