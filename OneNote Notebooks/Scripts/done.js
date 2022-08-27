let LSData=JSON.parse(localStorage.getItem("done-list")) || [];
let parent=document.querySelector("tbody");
function Display(data=[]){
    parent.innerHTML=null;
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

        
        todo.append(name,desc,start,end,priority);
        parent.append(todo);
    })
}
Display(LSData);
