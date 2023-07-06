
const userContainer = document.getElementById('todos');
const taskIdInput= document.getElementById('taskInput');
const getUsers = async () => {
  try {
    const response = await fetch('https://dummyjson.com/todos?limit=30');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data.todos;
  } catch (error) {
    console.log(error);
  }
};
const displayUsers = async () => {
  const users = await getUsers();
  console.log(users);
  if (Array.isArray(users)) {
    users.forEach(item => {
      let li = document.createElement('li');
      let checkbox = document.createElement('input');
      let label = document.createElement('taskInput');
      let deleteButton = document.createElement('button');
      li.style.display = 'flex';
      checkbox.type = 'checkbox';
      checkbox.style.marginRight = '10px';
      label.textContent = item.todo;
      deleteButton.textContent = 'X';
      deleteButton.classList.add('delete-button');
      deleteButton.addEventListener('click', () => {
        deleteTask(item.id);
        li.remove();
      });
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteButton);
      userContainer.appendChild(li);
    });
  }
};

const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`https://dummyjson.com/todos/add`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  } catch (error) {
    console.log(error);
  }

};
displayUsers();
const addNewTask = () => {
  const taskInput = document.getElementById('addButton');
  const newTask = taskInput.value.trim();
  taskInput.value = '';
  if (newTask) {
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('taskInput');
    let deleteButton = document.createElement('button');
    li.style.display = 'flex';
    checkbox.type = 'checkbox';
    checkbox.style.marginRight = '10px';
    label.textContent = newTask;
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      li.remove();
    });
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(addButton);
    userContainer.appendChild(li);
  }
};


