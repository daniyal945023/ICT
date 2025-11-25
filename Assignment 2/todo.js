//TODO LIST
const prompt = require('prompt-sync')();
let tasksArr = ["eat", "sleep", "gym", "bicycle"];

function addTask(task) {
    if(!task.trim()){
        console.log("task cannot be empty")
    } else {
tasksArr.push(task);
    }
}

function removeTask(task){
let removed = false;
    for(let i = tasksArr.length-1; i >= 0; i--){
        if(task.toLowerCase() === tasksArr[i].toLowerCase()){
            const remove = i;
            tasksArr.splice(remove,1);
            removed = true;
        } 
            
        
    }

    if(!removed){
        console.log(`Task ${task} not found`);
    }
}

function displayTasks(tasksArr){
    if(tasksArr.length !== 0) {
    for(let i = 0; i < tasksArr.length; i++){
        
console.log(`${i+1}. ${tasksArr[i]}`);
    }

} else {
    console.log("Error, Task list is empty");
}
}

function clearTasks(tasksArr){
    if(tasksArr.length !== 0){
 tasksArr.length = 0;
    } else {
        console.log("Task list is already empty");
    }
}


console.log("To Do List Program");
let choice;
do {
choice = prompt("Enter choice---add, remove, view, clear");

if(choice === "add"){
    let task = prompt("add a task");
    addTask(task);

} else if (choice === "remove") {
    let task = prompt("remove a task");
    removeTask(task);
} else if (choice === "view"){
   displayTasks(tasksArr);
} else if(choice === "clear"){
    clearTasks(tasksArr);
} else if(choice === "exit"){
    console.log("Program Exited");
} else {
    console.log("Error,Invalid choice, Try again");
}
} while(choice !== "exit");
