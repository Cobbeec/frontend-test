document.addEventListener("DOMContentLoaded", () => {
    fetchAllTasks()



//read fetch tasks index 
// create create a new task 
//delete a task 

}) 

const BASE_URL = "http://localhost:3000/tasks"
function fetchAllTasks () {
    fetch(`${BASE_URL}`)
    .then(resp => resp.json())
    .then(tasks => {

        for (const task of tasks) {
            console.log("rails obj", task)
            let t = new Task(task.id, task.name, task.description )
            console.log("js object", t)
            t.renderTask(); 
        }
    })
}