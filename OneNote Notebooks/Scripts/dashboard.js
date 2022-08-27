let LSData=JSON.parse(localStorage.getItem("task-list")) || [];
let parent=document.querySelector("tbody");
let filter=document.getElementById("filter");
let count = document.getElementById("task-count");
function Display(data=[]){
    parent.innerHTML=null;
    count.textContent=data.length;
    data.forEach(function(el,i){
        let todo=document.createElement("tr");

        let name=document.createElement("td");
        name.textContent=el.name;

        let desc=document.createElement("td");
        desc.textContent=el.desc;

        let start=document.createElement("td");
        start.textContent=el.start;

        let end=document.createElement("td");
        end.textContent=el.end;

        let priority=document.createElement("td");
        priority.textContent=el.priority;

        let btn=document.createElement("td");
        btn.textContent="Add";
        btn.addEventListener("click",() =>{
            LSData=LSData.filter((ele,index) =>{
                return index != i;
            })
            Display(LSData);
            localStorage.setItem("task-list",JSON.stringify(LSData));
            let progressData=JSON.parse(localStorage.getItem("progress-list")) || [];
            progressData.push(el);
            localStorage.setItem("progress-list",JSON.stringify(progressData));
        })
        todo.append(name,desc,start,end,priority,btn);
        parent.append(todo);
    })
}
Display(LSData);

filter.addEventListener("change",(e) =>{
    if(e.target.value === ""){
        Display(LSData);  
    }else{
        let filtered= LSData.filter((el) =>{
            return el.priority === e.target.value;
        })
        Display(filtered);
    }
})
