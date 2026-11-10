// 1.select HTML elements
const taskInput=document.getElementById("taskInput");
const addTaskBtn=document.getElementById("addTaskBtn");
const tasklist=document.getElementById("tasklist");

// 2. listns for buttons click
addTaskBtn.addEventListener("click", function(){

  // get the users input
  const task=taskInput.value.trim();

  // prevent empty tasks
  if(task===""){
    alert("please enter a task");
    return;
  }

  // 5.create new lsit item
  const li=document.createElement("li");

  // 6.add the task text
  li.textContent=task;

  // 7.add the new item to the task list
  tasklist.appendChild(li);

  // 8.clear the input field
  taskInput.value="";
});