// //getItem()
// LocalStorage.setItem("key","value")
// //getitem()
// Let key= localStorage.getItem("key")
// Console.log
// //remove one item()
// localStorage.removeItem("key")
// //clear()
// localStorage.clear()
// //Script cant read array or obj so on more we have to do
// JSON.stringify(arr/obj's   value)
// // again we need to convert back to what we need 
// // back to original
// JSON.parse()



let num=[1,2,3,4,5,6]

num=JSON.stringify(num)
localStorage.setItem("Store_arr",num)
let get_arr=localStorage.getItem("Store_arr")
get_arr=JSON.parse(get_arr)
console.log(get_arr)


let nameObj={
    name:"am",
    age:"20"
}
localStorage.setItem("Store_obj",JSON.stringify(nameObj))
let get_obj= localStorage.getItem("Store_obj")
get_obj=JSON.parse(get_obj)
console.log(get_obj)