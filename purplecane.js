let Data=[
   
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6630-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"BRAISED LIONS MANE MUSHROOM WITH SWEET & SOUR PASSION FRUIT SAUCE"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6631-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"HANDMADE NOODEL WITH MINCED MUSHROOM"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6536-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Handmade Noodle Soup With Mixed Vegetables 烏龍蔬食茶湯麺"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6634-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"HEALTHY HERBAL ASSORTED MUSHROOM"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6553-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Long Jing Green Tea Rice 普洱糙米飯"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6537-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Long Jing Lei Cha Rice 雨過天青套餐（龍井擂 茶飯)"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6633-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"MINI VEGETABLE HOT SPOT"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6632-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"STIR FRIED 4 SEASON VEGETABLE WITH MINCED PICKLES."
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6629-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"STIR FRIED KING TRUMPET MUSHROOM WITH BASIL"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6534-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Vegetable Hot Pot With Dong Ding Oolong Tea Soup 乌龙蔬食茶汤煲"
    },
   
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6531-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Braised Assorted Vegetable With Lotus (Shui Xian) 水仙六根素净菓"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6532-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Homemade Braised Beancurd In Pumpkin Tea Sauce 龍井南瓜燴豆腐"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6533-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Mixed Vegetable Curry Pot 荔红咖喱蔬菜煲"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6551-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Sautéed Macadamia Nut With Celery And Tie Guan Yin Tea 鐵觀音夏果伴芹香"
    },
   
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6539-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Sautéed Macadamia Nut With Celery And Tie Guan Yin Tea 鐵觀音夏果伴芹香"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6535-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Stir Fried Abalone Mushroom With Dry Chili And Tea 宮保鮑魚菇"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6550-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Stir Fried Green Bean With Minced Pickles And Tea 菜蒲桂豆苗"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/126-6552-m.jpg',
        Name:"Purple Cane Tea Cuisine",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Stir Fried Lotus Root And Water Chestnut With Tea 鬼馬天地"
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
    window.location.href="purplecane.html"
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
    name.innerText="Purple Cane (Shaw Parade)"
    name.style.fontWeight="400"



    let address=document.createElement('h4')
    address.innerText="Lot GL-02, Ground Floor, Shaw Parade, Changkat Thambi Dollah, 55100 Kuala Lumpur, Wilayah Persekutuan, Malaysia"
    address.style.marginTop="-20px"
    address.style.fontWeight="400"





    let phone=document.createElement('h4')
    phone.innerText="+603-2145 3090"
    phone.style.marginTop="-20px"
    phone.style.fontWeight="400"

    let hours=document.createElement('h4')
    hours.innerText="Daily: 10am - 10pm"
    hours.style.marginTop="-20px"
    hours.style.fontWeight="400"

    let iframe= document.createElement("iframe");
    iframe.id="frame"
    iframe.style.height="395px"
    iframe.style.width="450px"
    iframe.src="https://maps.google.com/maps?q=Purple%20Cane&t=&z=13&ie=UTF8&iwloc=&output=embed";

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
    a.href="https://maps.google.com/?q=Purple+Cane+Tea+Cuisine+%E7%B4%AB%E8%97%A4%E8%8C%B6%E5%8E%9F@3.1398398631077170,101.7122398316860200"
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