const form = document.getElementById("todo-form");
const input = document.getElementById("inptext");
const todoList = document.getElementById("todo");

function addTask(event){
    event.preventDefault();
    if(input.value == ""){
        alert("INPUT FIELD IS EMPTY; Type In A To-Do Task...")
    }
    else{
        const inputValue = input.value;

        const listItem = document.createElement("li");
        const divList = document.createElement("div");
        const listCheckbox = document.createElement("input");
        listCheckbox.type = "checkbox"; 
        listCheckbox.addEventListener("change", function() {
            listItem.classList.toggle("strike");
            saveTasks();
        });

        const listSpan = document.createElement("span");
        listSpan.innerText = inputValue;
        const delBtn = document.createElement("button");

        divList.classList.add("todo-info");
        delBtn.classList.add("todo-delete");
        delBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';


        todoList.appendChild(listItem);
        listItem.appendChild(divList);
        listItem.appendChild(delBtn);
        divList.appendChild(listCheckbox);
        divList.appendChild(listSpan);

        saveTasks();
    }
        input.value = "";
        
}

function deleteTask(e){
   if(e.target.tagName == "I"){
    e.target.parentElement.parentElement.remove(); 
    saveTasks();
   }
}

function editTask(e){
    const show = e.target;
    if(show.tagName == "SPAN"){
        const prevInput = show.innerHTML;
        show.innerHTML = `<input class="new-input" value='${prevInput}'>`;
        input.type = "text";

        const editInput = show.querySelector("input");

        editInput.addEventListener("blur", function(){
            const newValue = editInput.value;
            show.innerHTML = newValue;
        });

        editInput.addEventListener('keypress', function(e) {
          if (e.key === 'Enter') {
            editInput.blur();
            saveTasks();
          }
        });
    }
}

form.addEventListener("submit", addTask);
todoList.addEventListener("click", deleteTask);
todoList.addEventListener("click", editTask);

function saveTasks(){
    localStorage.setItem("data", todo.innerHTML);
}

function showTask(){
    todo.innerHTML = localStorage.getItem("data");
}
showTask();