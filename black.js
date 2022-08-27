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

let mai= document.getElementById("mai")
let func=()=>{
 
    mai.innerText="No deals available at the moment."
    mai.style.width='20%';
    mai.style.margin="auto";
    mai.style.display="block"

    let ov= document.getElementById("ov")
    ov.style.borderBottom= "0px solid rgb(181, 177, 177)"

    let md=document.getElementById("md")
    md.style.borderBottom= "2px solid #04be5a"
    md.style.paddingBottom= "5px"
    
    let fm= document.getElementById("fm")
    fm.style.borderBottom= "0px"

    let lc= document.getElementById("lct")
    lct.style.borderBottom= "0px"
}

function func0(){
    window.location.href="black.html"
}



function func1(){

    let fm=document.getElementById("fm")
    fm.style.borderBottom= "2px solid #04be5a"
    fm.style.paddingBottom= "5px"

    let md=document.getElementById("md")
    md.style.borderBottom= "0px"
    
    let lct= document.getElementById("lct")
    lct.style.borderBottom= "0px"

    let ov= document.getElementById("ov")
    ov.style.borderBottom= "0px solid rgb(181, 177, 177)"


    let cont=document.getElementById("cont2")

display(Data)
function display(Data){
    mai.innerHTML=null
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
    mai.append(div);
})   

}
mai.style.display="grid"
mai.style.gridTemplateColumns="repeat(3,1fr)"
mai.style.rowGap="40px"
mai.style.columnGap="40px"
mai.style.width="68%"
mai.style.margin="auto"

}




function func2(){

    let ov= document.getElementById("ov")
    ov.style.borderBottom= "0px"

    let md=document.getElementById("md")
    md.style.borderBottom= "0px"
    
    let fm= document.getElementById("fm")
    fm.style.borderBottom= "0px"

    let lct= document.getElementById("lct")
    lct.style.paddingBottom= "5px"
    lct.style.borderBottom= "2px solid #04be5a"
    




    mai.innerHTML=null

    let div2 = document.createElement("div");


    let name = document.createElement("h2");
    name.innerText="The Black Cat Cafe"
    name.style.fontWeight="400"



    let address=document.createElement('h4')
    address.innerText="B-00-11 Viva Residency, Jalan Suppiah Pillay, 2nd mile Jalan Ipoh, 51200 Kuala Lumpur, Wilayah Persekutuan, Malaysia"
    address.style.marginTop="-20px"
    address.style.fontWeight="400"





    let phone=document.createElement('h4')
    phone.innerText="03-4050 2822 / 016-419 1309"
    phone.style.marginTop="-20px"
    phone.style.fontWeight="400"

    let hours=document.createElement('h4')
    hours.innerText="Mon - Sat: 11am - 9.30pm; Sun: Closed"
    hours.style.marginTop="-20px"
    hours.style.fontWeight="400"

    let iframe= document.createElement("iframe");
    iframe.id="frame"
    iframe.style.height="395px"
    iframe.style.width="450px"
    iframe.src="https://maps.google.com/maps?q=The%20Black%20Cat%20Cafe&t=&z=13&ie=UTF8&iwloc=&output=embed";

    let add=document.createElement("h3")
    add.innerText="Address"
    add.style.fontWeight="400"

    let ph=document.createElement("h3")
    ph.innerText="Phone"
    ph.style.fontWeight="400"

    let oh=document.createElement("h3")
    oh.innerText="Opening Hours"
    oh.style.fontWeight="400"

    let div1=document.createElement("div")

    let a=document.createElement("a")
    a.innerText="View Full Location Map »"
    a.href="https://www.google.com/maps?q=The+Black+Cat+Cafe@3.1777466000000000,101.6850911999999900"
    a.style.textDecoration="none"
    
    
    let div=document.createElement("div")
    div.style.display="flex"
    div.style.boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px";
    div.style.paddingLeft="20px"
    div.style.height="400px"



    div1.append(iframe)
    div2.append(name,add,address,oh,hours,ph,phone,a,div1)
    div.append(div2,div1)
    mai.append(div);

    mai.style.width='70%';
    mai.style.margin="auto";
    mai.style.marginTop="-80px"
    mai.style.marginBottom="80px"
    mai.style.display="grid"
    mai.style.gridTemplateColumns="repeat(1,1fr)"
    mai.style.rowGap="0px"
    mai.style.columnGap="0px"


}