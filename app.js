/*
  Code based on the udemy course: https://www.udemy.com/course/modern-javascript-from-the-beginning
*/

// UI vars:
const task = document.getElementById('task');                        
const addTaskBtn = document.getElementById('add-task-btn');          
const taskFilter = document.getElementById('task-filter');           
const deleteTaskBtn = document.getElementById('delete-task-btn');    
const taskList = document.querySelector('.collection');              

// UTIL vars:
// This variable needs to be reseted every time the list is cleared!
let checkboxCtrlNumber = 0; 

// Load all events listeners:
const loadAllEventsListeners = () => {
  // Click on btn ( Add Task ):
  addTaskBtn.addEventListener('click', onAddTaskBtnClick);
  // Delete all tasks:
  deleteTaskBtn.addEventListener('click', onDeleteAllBtnClick);
  // Remove onl one task:
  taskList.addEventListener('click', removeTask);
  // Filter the tasks:
  taskFilter.addEventListener('keyup', filterTasks);
}

// Handle the ( Add Task ) button:
const onAddTaskBtnClick = (e) => {
  // Check if there is something in the field:
  if(task.value === '') {
    alert('Add a new task');
  } else {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.innerHTML = `<input type="checkbox" class="mark-item" id=${checkboxCtrlNumber.toString()}> 
    <label for=${checkboxCtrlNumber.toString()}>${task.value}</label>`
    checkboxCtrlNumber += 1;
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    // Append the link to li
    console.log(li);
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
    // Clear input
    task.value = '';
    
    e.preventDefault();
  }
}

// Handle the delete all tasks button:
const onDeleteAllBtnClick = (e) => {
  // Gets the list:
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // Reset the checkbox counter var:
  checkboxCtrlNumber = 0;
  e.preventDefault();
}

// Handle the deletion of one task:
const removeTask = (e) => {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?'))
      e.target.parentElement.parentElement.remove();
  }
  // if(e.target.parentElement.classList.contains('collection-item')) {    
  //   let text = e.target.parentElement.innerText;
  //   let strikeText = text.strike();
  //   console.log(strikeText);
  // }    
}

// Handle the tasks filtering:
const filterTasks = (e) => {
  let text = e.target.value.toLowerCase();
  const nodeList = document.querySelectorAll('.collection-item');
  nodeList.forEach((elem) => {
    // console.log(elem.textContent);
    const firstElemContent = elem.textContent;
    if(firstElemContent.toLowerCase().indexOf(text) != -1){
      elem.style.display = 'block';
    } else {
      elem.style.display = 'none';
    } 
  });
  // console.log(nodeList[0]);
  e.preventDefault();
}

// Call app:
loadAllEventsListeners();








