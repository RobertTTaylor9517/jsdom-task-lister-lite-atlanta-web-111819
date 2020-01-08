document.addEventListener("DOMContentLoaded", () => {
  let task = document.getElementById("create-task-form");
  let todoList = document.getElementById("tasks");

  task.addEventListener("submit", function(event){
    event.preventDefault();

    let listEntry = task.querySelector('#new-task-description').value;
    let li = document.createElement('li')
    li.textContent = listEntry;
    todoList.appendChild(li);

    task.reset();
  })
});
