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
  deleteTaskBtn.addEventListener('click', onDeleteAllBtnClick);
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
    li.innerHTML = `<input type="checkbox" id=${checkboxCtrlNumber.toString()}> 
    <label for=${checkboxCtrlNumber.toString()}>${task.value}</label>`
    checkboxCtrlNumber += 1;
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    // Append the link to li
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
  e.preventDefault();
}

// Call app:
loadAllEventsListeners();








