async function getData (url){
    try{
        let res= await fetch(url);
        let data= await res.json();
        return data;
    }
    catch(error){
        console.log('error:', error)

    }

}
function append (data, container){
    data.forEach(({title,image}) => {
        let div = document.createElement("div");
        let p =  document.createElement("p");
        let img = document.createElement("img");
        let price=document.createElement('p');
          price.innerText=`${price.innerText}`
        // let p1 = document.createElement("p");

        p.innerText= title;
        img.src= image;
       // price.innerText=price;
       



        div.append (img, p,price);
        container.append(div);

       }); 
}

export {getData,append};