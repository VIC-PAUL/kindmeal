let Data = [
  {
    image: "https://i.ibb.co/x8Fnjtf/Screenshot-6215.png",
    Address: "Kuala Lumpur & 1 Branch",
    Details:
      "Purple Cane Tea Cuisine is uniquely prepared, infusing tea in every dish to bring out the natural aroma and flavor of fo..",
  },
  {
    image: "https://i.ibb.co/2Z10SR4/Screenshot-6216.png",
    Address: "Kuala Lumpur, Wilayah Persekutuan",
    Details:
      "Tea+ indulges you with the first artisan tea bar experience in Malaysia. We are here to revive the forgotten culture, t..",
  },
  {
    image: "https://i.ibb.co/4tZVVqq/Screenshot-6217.png",
    Address: "Petaling Jaya, Selangor",
    Details:
      "Veggielicious, an authentic Thai-vegan fusion cuisine that encompasses exceptional taste, offering the perfect dining ex..",
  },
  {
    image: "https://i.ibb.co/MMsGBym/Screenshot-6218.png",
    Address: "Cheras, Selangor",
    Details:
      'Recognized as the "First Hainanese Vegeterian Kopitiam in Malaysia” by the Malaysia Book of Records, Hainan Village stri..',
  },
  {
    image: "https://i.ibb.co/tX6qT9j/Screenshot-6219.png",
    Address: "Sri Petaling, Kuala Lumpur",
    Details:
      "Vegetarian is the next generation of food in the world. Live simple, Eat simple, Love simple. Simple Garden Cafe is loc..",
  },
  {
    image: "https://i.ibb.co/cFjNF5K/Screenshot-6220.png",
    Address: "Kuala Lumpur, Wilayah Persekutuan",
    Details:
      "Love Earth Cafe is established since 2010, promoting the love of our planet earth and environment through a delicious va..",
  },
  {
    image: "https://i.ibb.co/gg292Dq/Screenshot-6221.png",
    Address: "Petaling Jaya, Selangor",
    Details:
      "With beginnings in Ipoh and Kampar as manufacturers and suppliers of processed vegetarian food, Yishensu was known as Yi..",
  },
  {
    image: "https://i.ibb.co/F6Zz57s/Screenshot-6222.png",
    Address: "Cheras, Kuala Lumpur",
    Details:
      "Welcome to Vegelab Maxim Cheras Love Food, Love Life and Love Our Planet We aim to help raise consciousness around foo..",
  },
  {
    image: "https://i.ibb.co/cxXBC3W/Screenshot-6223.png",
    Address: "Subang Jaya , Selangor",
    Details:
      "Honest Bakery Cafe is a local cafe in Subang Jaya that serves and promotes meat-free meals to encourage vegetarianism. ..",
  },
  {
    image: "https://i.ibb.co/vDR71Sy/Screenshot-6224.png",
    Address: "Seri Kembangan, Selangor",
    Details:
      "With changes of the times, the people's diet and living habits also tend to diversify, having new cognition on the choic..",
  },
];

let results = 110;
let per_page = 10;

let showButns = (results, per_page) => {
  let buttons_div = document.getElementById("buttonss");

  let buttons = Math.ceil(results / per_page);
  for (let i = 1; i < buttons; i++) {
    let button = document.createElement("button");
    button.innerText = i;
    button.style.backgroundColor = "transparent";
    button.style.border = "0px";
    button.style.color = "#057ff1";
    button.onclick = function () {
      pagination(i);
    };
    buttons_div.append(button);
  }
};
showButns(results, per_page);

let showButns1 = (results, per_page) => {
  let buttons_div = document.getElementById("buttonss1");

  let buttons = Math.ceil(results / per_page);
  for (let i = 1; i < buttons; i++) {
    let button = document.createElement("button");
    button.innerText = i;
    button.style.backgroundColor = "transparent";
    button.style.border = "0px";
    button.style.color = "#057ff1";
    button.onclick = function () {
      pagination(i);
    };
    buttons_div.append(button);
  }
};
showButns1(results, per_page);

let cont = document.getElementById("cont1");

display(Data);
function display(Data) {
  document.getElementById("cont1").innerHTML = null;
  Data.map(function (ele) {
    let div = document.createElement("div");
    div.style.boxShadow =
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px";

    let image = document.createElement("img");
    image.src = ele.image;
    image.style.width = "100%";
    image.style.borderRadius = "10px 10px 0 0";

    let details = document.createElement("h4");
    details.style.fontWeight = "500";
    details.style.paddingLeft = "10px";
    details.style.paddingRight = "10px";
    details.innerText = ele.Details;
    if (ele.Details == undefined) {
      details.innerText = null;
      details.style.display = "none";
    }

    let address = document.createElement("h4");
    address.innerText = ele.Address;
    address.style.fontWeight = "400";
    address.style.color = "grey";
    address.style.paddingLeft = "10px";

    let butn = document.createElement("button");
    butn.id = "shop";
    butn.innerText = "View Shop";
    butn.style.marginLeft = "10px";
    butn.style.marginBottom = "20px";
    butn.style.height = "25px;";
    butn.style.width = "160px;";
    butn.style.lineHeight = "25px";
    butn.style.fontSize = "18px";
    butn.style.color = "#ffffff";
    butn.style.fontWeight = "bold";
    butn.style.backgroundColor = "#f53838";
    butn.style.textAlign = "center";
    butn.style.verticalAlign = "middle";
    butn.style.borderRadius = "6px";
    butn.style.border = "0px";
    butn.addEventListener("click", function () {
      shops();
    });
    butn.style.padding = "8px 40px 8px 40px";
    div.append(image, address, details, butn);
    document.getElementById("cont1").append(div);
  });
}

function shops() {
  window.location.href = "purplecane.html";
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
