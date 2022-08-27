let Data=[
   
    {
        image:'https://www.kindmeal.my/photos/item/0/362-3914-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Alfalfa Salad Inari"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/362-3912-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Quinoa-Brown Rice Kimbap"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/362-3913-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Quinoa-Brown Rice Tuna Inari"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/362-3911-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Quinoa-Brown Rice Tuna Kimbap"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/362-3915-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Steam Wholemeal Dumpling"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/362-4148-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Seaweed Fish Brown Rice Porridge"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/362-4147-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Seaweed Tomato Mee Hoon"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/362-4145-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"AENON Assam Laksa"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/362-3924-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"AENON Veggie Wrap"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/362-4144-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Almond Buckwheat Soba"
    },
   
    {
        image:'https://www.kindmeal.my/photos/item/0/362-4143-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Healthy Steamboat"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/335-4327-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Roasted Chicken Rice "
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/362-3921-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Red Bean Soup "
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/362-3925-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Banana Almond Frappe "
    },
   
    {
        image:'https://www.kindmeal.my/photos/item/0/362-3908-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Bean Curd Barley Soup "
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/362-3928-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Misai Kucing Tea "
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/362-3927-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Flower Tea"
    },
    {
        image:'https://www.kindmeal.my/photos/item/0/362-3929-m.jpg',
        Name:"AENON The Health Kitchen",
        Address:"Kuala Lumpur, Wilayah Persekutuan",
        Details:"Red Jujube Longan Wolfberry Tea"
    }

]

let mai= document.getElementById("mai")
let func=()=>{
 
    mai.innerText="No deals available at the moment."
    mai.style.width='20%';
    mai.style.margin="auto";
    mai.style.display="block"
    mai.style.marginBottom='80px'
    


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
    window.location.href="Aenon.html"
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
    name.innerText="AENON The Health Kitchen"
    name.style.fontWeight="400"



    let address=document.createElement('h4')
    address.innerText="1, Jalan 4/93, Taman Miharja, Jalan Cheras, 55200 Kuala Lumpur, Wilayah Persekutuan, Malaysia"
    address.style.marginTop="-20px"
    address.style.fontWeight="400"





    let phone=document.createElement('h4')
    phone.innerText="03 - 9201 0972"
    phone.style.marginTop="-20px"
    phone.style.fontWeight="400"

    let hours=document.createElement('h4')
    hours.innerText="Sun - Thu: 11am - 3pm & 6pm - 9pm; Fri - Sat: Closed"
    hours.style.marginTop="-20px"
    hours.style.fontWeight="400"

    let iframe= document.createElement("iframe");
    iframe.id="frame"
    iframe.style.height="395px"
    iframe.style.width="450px"
    iframe.src="https://maps.google.com/maps?q=AENON%20The%20Health%20Kitchen&t=&z=13&ie=UTF8&iwloc=&output=embed";

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
    a.href="https://www.google.com/maps?ll=3.122992,101.721118&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=436133840961807936"
    a.style.textDecoration="none"
    a.style.color="blue"
    
    
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