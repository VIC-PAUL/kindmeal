
let Data=[
   
    {
        image:'https://www.kindmeal.my/photos/item/0/335-4318-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Jakarta-Style Gadogado"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-4322-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Nasi Lemak"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-4298-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Rich Chocolate Cake"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-3884-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Vegan Macaron"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-3898-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Cakes"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-4315-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Coconut Orange Slice"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-4328-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Valentine's Day Buttercake"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-3883-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Vegan Macaron"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-4317-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Eggless Doughnut"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-4326-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"White Chocolate Daisy"
    },
   
    {
        image:'https://www.kindmeal.my/photos/item/0/335-3882-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Sunflower Buttercake"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-4327-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Taco Set"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-4320-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Maggi Goreng"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-4294-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Pie"
    },
   
    {
        image:'https://www.kindmeal.my/photos/item/0/335-4316-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Eggfree Chocolate Cake"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-4324-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Tango Lemon Rice"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-3868-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Raw Burrito With A Side Of Salsa & Cauliflower Rice"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-3879-m.jpg',
        Name:"The Black Cat Cafe",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Festive Butttercake Slice"
    }

]


let results=110;
let per_page=10;


let showButns=(results,per_page)=>{
   

    let buttons_div=document.getElementById("buttonss")

    let buttons=Math.ceil(results/per_page)
    for(let i=1;i<buttons;i++){
        let button=document.createElement("button")
        button.innerText=i;
        button.style.backgroundColor="transparent"
        button.style.border="0px"
        button.style.color="#057ff1"
        button.onclick=function(){
            pagination(i);
        }
        buttons_div.append(button)

    }

}
showButns(results,per_page)


let showButns1=(results,per_page)=>{
   

    let buttons_div=document.getElementById("buttonss1")

    let buttons=Math.ceil(results/per_page)
    for(let i=1;i<buttons;i++){
        let button=document.createElement("button")
        button.innerText=i;
        button.style.backgroundColor="transparent"
        button.style.border="0px"
        button.style.color="#057ff1"
        button.onclick=function(){
            pagination(i);
        }
        buttons_div.append(button)

    }

}
showButns1(results,per_page)

// let pagination=(page_no)=>{

// }



let cont=document.getElementById("cont2")

display(Data)
function display(Data){
    document.getElementById("cont2").innerHTML=null
Data.map(function(ele){
    let div = document.createElement("div");
    div.style.boxShadow = "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px";

    let image = document.createElement("img");
    image.src=ele.image
    image.style.width="100%"
    image.style.borderRadius="10px 10px 0 0"
    image.addEventListener("click",function(){
        togglePopup()
        dis(ele)
        di()
    })

    let details=document.createElement('h4')
    details.style.fontWeight="500"
    details.style.paddingLeft="10px"
    details.style.paddingRight="10px"
    details.innerText=ele.Details
    if(ele.Details==undefined){
        details.innerText=null
        details.style.display="none"  
    }


    let address=document.createElement('h5')
    address.innerText=ele.Address
    address.style.fontWeight="400"
    address.style.color="grey"
    address.style.paddingLeft="10px"
    address.style.marginTop='-20px';
    
    let name=document.createElement('h4')
    name.innerText=ele.Name
    name.style.marginLeft='10px';
    name.style.fontWeight="400";

    div.append(image,details,name,address)
    document.getElementById("cont2").append(div);
})   

}

let imageState = 0;

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
    imageState = 0;
}

function dis(ele){

    
    document.getElementById("cont3").innerHTML=null;
    let div1 = document.createElement("div");
    
    let image1 = document.createElement('img')
    image1.src=ele.image;
    image1.style.width="400px"
    image1.style.height="350px" 
    image1.style.marginLeft="80px" 
    image1.style.paddingTop="20px"  
    image1.id="image1"

    let det=document.createElement("h4")
    det.innerText=ele.Details
    det.style.textAlign="center"
    det.style.marginLeft="80px"
    det.id="det"

    let divs=document.createElement("div")
    divs.style.marginTop="180px"
    divs.style.display="flex"
    divs.style.justifyContent="space-between"
    divs.style.marginLeft="60px"

    let buttns=document.createElement("button")
    buttns.innerText="◀ Prev Item"
    buttns.style.backgroundColor="#04be5a"
    buttns.style.color="white"
    buttns.style.padding="10px 20px"
    buttns.style.border="0"
    buttns.style.borderRadius="5px"
    buttns.style.fontWeight="500"
    buttns.addEventListener("click",function(){
        di3()
    })
    

    let buttns1=document.createElement("button")
    buttns1.innerText="Next Item  ▶"
    buttns1.style.backgroundColor="#04be5a"
    buttns1.style.color="white"
    buttns1.style.padding="10px 20px"
    buttns1.style.border="0"
    buttns1.style.borderRadius="5px"
    buttns1.style.fontWeight="500"

    buttns1.addEventListener("click",function(){
        di2()
    })

    divs.append(buttns,buttns1)
    
    div1.append(image1,det)
    document.getElementById("cont3").append(div1,divs)
}






function di2(){ 
        imageState++;
        if(imageState===Data.length){
            imageState=0;
        }
        image1.src=Data[imageState].image;
        det.innerText=Data[imageState].Details

}

function di3(){ 
    imageState--;
    if(imageState<0){
        imageState=Data.length-1;
    }
    image1.src=Data[imageState].image;
    det.innerText=Data[imageState].Details
}




function di(){
    document.getElementById("cont6").innerHTML=null;
    let div2 = document.createElement("div");
    div2.id="div2"
    
    let image2 = document.createElement('img')
    image2.src='https://www.kindmeal.my/photos/shop/3/335-2150-m.jpg'

    let name=document.createElement("h4")
    name.innerText="The Black Cat Cafe"
    name.style.color="#666666"

    let add=document.createElement("h5")
    add.innerText="Address:"
    add.style.color='grey'
    add.style.textAlign="left"
    add.style.fontWeight="500"

    let ph=document.createElement("h5")
    ph.innerText="Phone:"
    ph.style.color='grey'
    ph.style.textAlign="left"
    ph.style.fontWeight="500"

    let oh=document.createElement("h5")
    oh.innerText="Opening Hours:"
    oh.style.color='grey'
    oh.style.textAlign="left"
    oh.style.fontWeight="500"

    let address=document.createElement('h5')
    address.innerText="B-00-11 Viva Residency, Jalan Suppiah Pillay, 2nd mile Jalan Ipoh, 51200 Kuala Lumpur, Wilayah Persekutuan"
    address.style.color='grey'
    address.id="address"
    address.style.textAlign="left"

    let phone=document.createElement('h5')
    phone.innerText="03-4050 2822 / 016-419 1309"
    phone.style.color='grey'
    phone.id="phone"
    phone.style.textAlign="left"

    let hours=document.createElement('h5')
    hours.innerText="Mon - Sat: 11am - 9.30pm; Sun: Closed"
    hours.style.color='grey'
    hours.id="hours"
    hours.style.textAlign="left"

    let div3=document.createElement("div")
    div3.style.display="grid"
    div3.style.gap="10px"
    

    let buttn1=document.createElement("button")
    buttn1.innerText="Meal Deals"
    buttn1.style.border="0"
    buttn1.style.padding="5px 0"
    buttn1.style.borderRadius="5px"

    let buttn2=document.createElement("button")
    buttn2.innerText="Food Menu"
    buttn2.style.border="0"
    buttn2.style.padding="5px 0"
    buttn2.style.borderRadius="5px"
    buttn2.addEventListener("click",function(){
        window.location.href="The Black Cat Cafe .html"
    })

    let buttn3=document.createElement("button")
    buttn3.innerText="Outlets"
    buttn3.style.border="0"
    buttn3.style.padding="5px 0"
    buttn3.style.borderRadius="5px"

    div3.append(buttn1,buttn2,buttn3)
    div2.append(image2,name,ph,phone,add,address,oh,hours,div3)
    document.getElementById("cont6").append(div2)

}


let tab1=document.getElementById("tab1");
tab1.addEventListener("click",show);
function show(){
    window.location.href="directory.html"

}
let tab2=document.getElementById("tab2");
tab2.addEventListener("click",show1);
function show1(){
    window.location.href="Featured Restaurants.html"
}

let tab3=document.getElementById("tab3");
tab3.addEventListener("click",show2);
function show2(){
    window.location.href="Food Menu.html"
}

let tab4=document.getElementById("tab4");
tab4.addEventListener("click",show3);
function show3(){
    window.location.href="Food Map.html"
}


