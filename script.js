
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
            let newList = document.createElement("div");
            newList.classList.add("input-list");

            list.appendChild(newList);

            let newForm = document.createElement("form");
            newForm.classList.add("input-created-form");

            newList.appendChild(newForm);

            let newText = document.createElement("input");
            newText.classList.add("created-text");
            newText.type = "text";
            let localTask = text.value;
            let localdate = date.value;
            let localPriority = priority.value;
            newText.value = localTask + "       " + "due date is:" + " " + localdate +"      " + "priority: " + localPriority;
            newText.setAttribute("readonly", "readonly");
            newForm.appendChild(newText);

            list.sort((list.newList.newForm.newText.localPriority))

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

            text.value = "";
            date.value = "";
            priority.value = "";
            date.style.visibility = "hidden";
            priority.style.visibility = "hidden";

            let totalList = parseInt(totalTodoList.value);
            totalTodoList.innerText = totalList++;

            editIcon.addEventListener("click", () =>{
                let parentList = editIcon.parentElement.parentElement;
                if(editIcon.innerText != "save"){
                    newText.removeAttribute("readonly");
                    newText.focus();
                    editIcon.classList.remove("fa-solid", "fa-pen");
                    editIcon.innerText = "save";
                }
                else{
                    newText.setAttribute("readonly", "readonly");
                    editIcon.innerText ="";
                    editIcon.classList.add("fa-solid", "fa-pen");
                }
            });

            deleteIcon.addEventListener("click", () =>{
                newList.remove();
                let totalList = parseInt(totalTodoList.value);
            totalTodoList.innerText = totalList++;
            })

            // let newDate = document.createElement("input");
            // newDate.classList.add("input-created-date");
            // newDate.type = "text";
        }
    }

text.addEventListener("click", giveInputs);
submitForm.addEventListener("click" , addLists);


