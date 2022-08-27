const form=document.querySelector("form");
let LSData=JSON.parse(localStorage.getItem("task-list")) || [];
form.addEventListener("submit",(e) =>{
  e.preventDefault();
  let obj={
    name:form.name.value,
    desc:form.desc.value,
    start:form.start.value,
    end:form.end.value,
    priority:form.priority.value,
  }
  LSData.push(obj);
  localStorage.setItem("task-list",JSON.stringify(LSData));
})