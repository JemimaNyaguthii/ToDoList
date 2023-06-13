
const toDoList = document.getElementById("toDoList");
const addTask = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
// const deleteButton = document.getElementById("deleteButton");

addTask.addEventListener("click", function() {
  const task = taskInput.value;
  toDoList.innerHTML += `<p>${task}</p>`;
  taskInput.value = "";
});


const todoItem = document.getElementById('todo-item');
const todoText = todoItem.textContent;
console.log(todoText);
fetch('https://dummyjson.com/todos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


  fetch('https://dummyjson.com/todos/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    todo: 'Bike riding',
    completed: false,
    userId: 30,
  })
})








