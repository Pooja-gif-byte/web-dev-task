const addBtn = document.querySelector
("#add-btn");
const newTaskInput=document.querySelector
("#wrapper input");
const tasksContainer =document.querySelector
("#tasks");
const error=document.querySelector
("#error");
const countValue=document.querySelector(".count-value");
let taskCount=0;

const displayCount=(taskCount) =>{
    countValue.innerText=taskCount;
};
const addTask=(taskCount) => {
    const taskName= newTaskInput.value.trim();
    error.style.display="none";
    if(!taskName){
    setTimeout(() => {
        error.computedStyleMap.display ="block"
    ;},200);
    return;
    }
    const task= `<div class="task">
    <input type="checkbox" class="task-check">
        <span class="taskname">${taskName}</span>
        <button class="edit">
        <i class="fa-solid fa-pen-to-square"></i>
        </button>
<button class="delete">
<i class="fa-solid fa-trash"></i>
</button>
</div>`;

tasksContainer.insertAdjacentHTML
("beforeend",task);
};
const deleteButtons=documtnt.querySelectorAll(".delete");

addBtn.addEventListener("click",addTask);