
const text = document.getElementById("input-text");
const date = document.getElementById("input-date");
const priority = document.getElementById("high-priority");
const form = document.getElementById("input-form");
const submitForm = document.querySelector(".action>button");
const list =  document.querySelector(".adding-list");
const totalTodoList = document.querySelector(".total-list>input");
// totalTodoList.innerText = 0;

// date-and-priority-fun(){

// }
function giveInputs(){
    console.log("its working");
    date.style.visibility = "visible";
    priority.style.visibility = "visible";
    }

    let taskArray = [];

    function addLists(e){
        e.preventDefault();
        if(text.value === "" || date.value ==="" || priority.value ===""){
            if(text.value ===""){
                alert("please write your task first");
            }
            if(date.value === ""){
                alert("please enter the task due date");
            }
            if(priority.value === ""){
                alert("please enter the task priority");
            }
        }
        else{
            // let data = {task: text.value, dueDate: date.value, taskpriority: priority.value};

            // text.focus();
            let task = {
                task: text.value,
                dueDate: date.value,
                priority: priority.value
            };
            taskArray.push(task);
            console.log(taskArray)
    
            // Sort the array by priority (assuming priority is numeric or can be compared)
            taskArray.sort((a, b) => b.priority - a.priority);
            
    
            // Clear the list before re-rendering
            list.innerHTML = "";

            // Re-render the sorted task list
            taskArray.forEach((taskItem) => {
                let newList = document.createElement("div");
                newList.classList.add("input-list");
    
                let newForm = document.createElement("form");
                newForm.classList.add("input-created-form");
    
                newList.appendChild(newForm);
    
                let newText = document.createElement("input");
                newText.classList.add("created-text");
                newText.type = "text";
                newText.value = `${taskItem.task}           due date is: ${taskItem.dueDate}            priority: ${taskItem.priority}`;
                newText.setAttribute("readonly", "readonly");
                newForm.appendChild(newText);
    
                let editAction = document.createElement("div");
                editAction.classList.add("edit");
    
                let editIcon = document.createElement("i");
                editIcon.classList.add("fa-solid", "fa-pen");
    
                editAction.appendChild(editIcon);
                newList.appendChild(editAction);
    
                let deleteAction = document.createElement("div");
                deleteAction.classList.add("delete");
    
                let deleteIcon = document.createElement("i");
                deleteIcon.classList.add("fa-regular", "fa-trash-can");
    
                deleteAction.appendChild(deleteIcon);
                newList.appendChild(deleteAction);
    
                list.appendChild(newList);
    
                // Event listeners for edit and delete buttons
                editIcon.addEventListener("click", () => {
                    if (editIcon.innerText !== "save") {
                        newText.removeAttribute("readonly");
                        newText.focus();
                        editIcon.innerText = "save";
                    } else {
                        newText.setAttribute("readonly", "readonly");
                        editIcon.innerText = "";
                    }
                });
    
                deleteIcon.addEventListener("click", () => {
                    newList.remove();
                    taskArray = taskArray.filter(item => item !== taskItem);
                });
            });
    
            // Clear input fields after adding
            text.value = "";
            date.value = "";
            priority.value = "";
            date.style.visibility = "hidden";
            priority.style.visibility = "hidden";
        }
    }

text.addEventListener("click", giveInputs);
submitForm.addEventListener("click" , addLists);


