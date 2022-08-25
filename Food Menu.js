
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
        datshow(ele)
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

function datshow(ele){
    display(ele)
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


