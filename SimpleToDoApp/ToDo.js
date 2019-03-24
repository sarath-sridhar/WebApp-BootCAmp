document.getElementById("new-task")
            .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                myFunction();
                //this.document.getElementById("AddNewButton").click();
            }
            });



function myFunction()
{
    //Get View elements
    var FieldValue=document.getElementById("new-task").value;
    var TodoList=document.getElementById("ToDoList");
    var NewToDo=document.createElement("li");
    //Create dynamic elements
    var DeleteTodo=document.createElement("button");
    var TODoLabel=document.createElement("label");
    var Ticker=document.createElement("input");
    var CheckBoxLabel=document.createElement("label");
    var CheckMarkSpan=document.createElement("span");
    //Assign values for DynamicElements
    TODoLabel.textContent=FieldValue;
    DeleteTodo.innerText="Delete"
    Ticker.type="checkbox";
    CheckBoxLabel.setAttribute("class","checkcontainer");
    CheckMarkSpan.setAttribute("class","checkmark");
    //Append to View
    CheckBoxLabel.appendChild(Ticker);
    CheckBoxLabel.appendChild(CheckMarkSpan);
    CheckBoxLabel.appendChild(TODoLabel);
    TodoList.appendChild(NewToDo);
    NewToDo.appendChild(CheckBoxLabel);
    // NewToDo.appendChild(TODoLabel);
    NewToDo.appendChild(DeleteTodo);


   
}



