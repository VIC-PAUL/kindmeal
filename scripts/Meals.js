    
    let FoodData = [
        {
          "id": "10",
          "Name": "Indian Thali",
          "Brand": "United",
          "Image": "https://th.bing.com/th/id/OIP.UXEXgssgrM3zyMUI1HC8-AHaJQ?w=143&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "Price": "430",
          "Discount": "25",
          "Days": "8"
        },
        {
          "id": "2",
          "Name": "Pasta",
          "Brand": "Divella",
          "Image": "https://th.bing.com/th/id/OIP.Q6vexg_J_0QOXcFXgj8GuQHaHa?w=206&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "Price": "250",
          "Discount": "10",
          "Days": "7"
        },
        {
          "id": "3",
          "Name": "Soup",
          "Brand": "Knor",
          "Image": "https://th.bing.com/th/id/OIP.sa71QzCqR-gbC4V9CI5OJwHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "Price": "120",
          "Discount": "8",
          "Days": "7"
        },
        {
          "id": "11",
          "Name": "Chinese",
          "Brand": "Chings",
          "Image": "https://th.bing.com/th/id/OIP.swp9bS4R4P_I2XYV3icSwgHaHL?w=186&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "Price": "200",
          "Discount": "15",
          "Days": "7"
        },
        {
          "id": "5",
          "Name": "Tea&Desert",
          "Brand": "Luxury",
          "Image": "https://th.bing.com/th/id/OIP.8zN3aKlQDzghOPn-EP1JugHaIu?w=171&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "Price": "240",
          "Discount": "25",
          "Days": "6"
        },
        {
          "id": "1",
          "Name": "Pasta",
          "Brand": "Win Green",
          "Image": "https://th.bing.com/th/id/OIP.3IsaViUbjK2Xl88pCv52sQHaFj?w=207&h=155&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "Price": "300",
          "Discount": "20",
          "Days": "9"
        },
        {
          "id": "6",
          "Name": "Tea&Desert",
          "Brand": "Green",
          "Image": "https://th.bing.com/th/id/OIP.XIBgFG2iODPziyUBpZio7wHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "Price": "210",
          "Discount": "20",
          "Days": "8"
        },
        {
          "id": "8",
          "Name": "Burger",
          "Brand": "Dubai",
          "Image": "https://th.bing.com/th/id/OIP.XnDCYerkY1pWr9bzzf1JewHaE8?w=272&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "Price": "120",
          "Discount": "15",
          "Days": "4"
        },
        {
          "id": "4",
          "Name": "Soup",
          "Brand": "Chings",
          "Image": "https://th.bing.com/th/id/OIP._tww7yrEMUGoZmMvCKpruQHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "Price": "140",
          "Discount": "15",
          "Days": "5"
        },
        {
          "id": "9",
          "Name": "Indian Thali",
          "Brand": "Homemade",
          "Image": "https://th.bing.com/th/id/OIP.79d_H2KHmmii52mIxIEXAAHaGy?w=195&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "Price": "450",
          "Discount": "30",
          "Days": "9"
        },
        {
          "id": "7",
          "Name": "Burger",
          "Brand": "Homemade",
          "Image": "https://th.bing.com/th/id/OIP.kgphIZBh4TOxRu908TFGYQHaFj?w=267&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "Price": "230",
          "Discount": "20",
          "Days": "7"
        },
        {
          "id": "12",
          "Name": "Chinese",
          "Brand": "Indidiet",
          "Image": "https://th.bing.com/th/id/OIP._wbprdDkIvqLx88qVJCowAHaD2?w=341&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "Price": "150",
          "Discount": "25",
          "Days": "8"
        }
      ]
       



    let Container = document.querySelector("#container")
    let buttoncontainer = document.querySelector("#buttons")
    let buttons = FoodData.length/2
    for(let i=1; i<=buttons; i++){
        let button = document.createElement("button")
        button.innerText = i;
        buttoncontainer.append(button)
    }


    display(FoodData)

    function display(FoodData){
        Container.innerHTML = null
        FoodData.forEach((el)=>{
            let division = document.createElement("div")
            let Image = document.createElement("img")
            Image.src = el.Image;
            let Name = document.createElement("p")
            Name.innerText = el.Name;
            let Brand = document.createElement("p")
            Brand.innerText = "Brand : " + el.Brand;
            let Discount = document.createElement("p")
            Discount.innerText = "Discount : " + el.Discount + "%";
            let Days = document.createElement("p")
            Days.innerText = "Expires in : " + el.Days + " Days";
            division.append(Image,Name,Brand,Discount,Days)
            Container.append(division)
        })
    }

    

    function filters(){
        let newData = FoodData;
        let filtervalue = document.querySelector("#category").value
        if(filtervalue == "select"){
            display(FoodData)
            return
        }

        let filterData = newData.filter((el)=>{
            return el.Name == filtervalue
        })
        display(filterData)
    }

    function search(){
        let searchvalue = document.querySelector("#search").value;
        
        let newData = FoodData;

        if(searchvalue == ""){
            display(FoodData)
            return
        }

        let filterData = newData.filter((el)=>{
            return el.Name == searchvalue
        })
        display(filterData)
    }
