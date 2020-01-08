document.addEventListener("DOMContentLoaded", () => {
  let task = document.getElementById("create-task-form");
  let todoList = document.getElementById("tasks");

  task.addEventListener("submit", function(event){
    event.preventDefault();
    let i = 1;

    let listEntry = task.querySelector('#new-task-description').value;
    let textColor = task.querySelector('#new-task-color').value;
    let li = document.createElement('li')

    li.textContent = listEntry;
    li.setAttribute("class", "list-entry")
    li.style.color = textColor;
    li.addEventListener('click', deleteEntry)
    
    todoList.appendChild(li)
    task.reset();
  })

  function deleteEntry(event){
    console.log(event);
    let target = event.target
    console.log(event.target)
    target.remove();
  }

});
