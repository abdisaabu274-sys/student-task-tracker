// 1.select HTML elements
const taskInput=document.getElementById("taskInput");
const addTaskBtn=document.getElementById("addTaskBtn");
const tasklist=document.getElementById("tasklist");

const totaltasks=document.getElementById("totaltasks");
const completedtasks=document.getElementById("completedtasks");
const pendingtasks=document.getElementById("pendingtasks");

//2. create an array to store the tasks
const tasks=[];

// 3.function to display the tasks
function renderTasks(){

  // clear the exxisting task list
  tasklist.innerHTML="";

  // loop through all the tasks
  tasks.forEach(function(task){

    // create list item
    const li=document.createElement("li");

    // create checkbox
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.checked=task.completed;

    // create task text
    const span=document.createElement("span");
    span.textContent=task.title;

    // apply completed styling
    if(task.completed){
      span.classList.add("completed");
    }

    // create delete button
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="delete";

    // handle the task compliition
    checkbox.addEventListener("change",function(){
      task.completed=checkbox.checked;
      renderTasks();
    });

    // handle task deletion
    deleteBtn.addEventListener("click",function(){
      const updatetasks=tasks.filter(function(item){
        return item.id!==task.id;
      });

      tasks.length=0;
      tasks.push(...updatetasks);

      renderTasks();

    });

    // add elements to list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // add list item to webpage
    tasklist.appendChild(li);
    });

    // update statistics
    updatestats();
}
// 4. function to update statistics
function updatestats(){
  const total=tasks.length;
  const completed=tasks.filter(function(task){
    return task.completed;
  }).length;

  const pending=total - completed;

  totaltasks.textContent=total;
  completedtasks.textContent=completed;
  pendingtasks.textContent=pending;

}

// 5. add a new task
addTaskBtn.addEventListener("click", function(){

  const title=taskInput.value.trim();

  if(title==""){
    alert("please enter task");
    return;
  }

  const newTask={
    id:Date.now(),
    title:title,
    completed:false

  };

  tasks.push(newTask);
  taskInput.value="";
  renderTasks();

})
// // 2. listns for buttons click
// addTaskBtn.addEventListener("click", function(){

//   // get the users input
//   const task=taskInput.value.trim();

//   // prevent empty tasks
//   if(task===""){
//     alert("please enter a task");
//     return;
//   }

//   // 5.create new lsit item
//   const li=document.createElement("li");

//   // 6.add the task text
//   li.textContent=task;

//   // 7.add the new item to the task list
//   tasklist.appendChild(li);

//   // 8.clear the input field
//   taskInput.value="";
// });