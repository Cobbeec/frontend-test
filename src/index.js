document.addEventListener("DOMContentLoaded", () => {
    createForm();
    fetchTasks() 
 })
 const BASE_URL = "http://127.0.0.1:3000/tasks" 
 function fetchTasks () {
    fetch(`${BASE_URL}`)
    .then(resp => resp.json())
    .then(tasks => {
        console.log(tasks)
        for (const task of tasks) {
            let t = new Task(task.id, task.name, task.description )
            t.renderTask();
        }
    })
 }
 function createForm() {
    let tasksForm = document.getElementById ("tasks-form")
    tasksForm.innerHTML +=
    `
    <form>
    Name: <input type="text" id="name">
    Description: <input type="text" id="description">
   Day ID: <input type="integer" id="day_id">
    <input type="submit" value="Create Task">
    </form>
    `
  tasksForm.addEventListener("submit", taskFormSubmission)
  console.log()
 }

 function taskFormSubmission(event) {
    event.preventDefault(); 
    let name = document.getElementById("name").value
    let description = document.getElementById("description").value 
    let day_id = document.getElementById("day_id").value 
    let task = {
        name: name,
        description: description, 
        day_id: day_id 
    }
    console.log('Log 1 - Task Data = ');
    console.log(task);
    fetch('http://localhost:3000/tasks', {
        method: "POST", 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, 
        body: JSON.stringify(task) 
    })
    .then(resp => resp.json()) 
    .then(task => {
        let t = new Task(task.id, task.name, task.description, task.day_id)
        t.renderTask(); 
    })
} 


// function deleteTask(id){
//     let configTask = {
//         method: 'DELETE',
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         }
//     }

//     fetch(`http://localhost:3000/tasks/${id}`, configTask)
//     .then(res => res.json())
//     .then(json => {
//         alert(json.message)
//     })

// // remove from dom
//     let task = document.getElementById(`task-${id}`)
//     task.remove()
// }

// function deleteTask(id) {
//     let taskId = parseInt(id.data-id.id) 
//     fetch('http://localhost:3000/tasks/${taskId}',{
//         method: 'DELETE'
//     }) 
//     }

function deleteTask () {
    let taskId = (event.target.dataset.id) 
    fetch(`http://localhost:3000/tasks/${taskId}`,{
    method: 'DELETE'
    
 }) 
 .then(resp => resp.json()) 
 .then(task => {alert(task.message)
 })
this.location.reload() 
}

// add document.getElementById and remove put it inside of the task

// let buttons = document.getElementsByClassName(".delete-button")
// for (const button of buttons){
//     button.addEventListener("click", () =>{
//         debugger 
//     })
// }
// console.log(buttons)
//  function taskFormSubmission(event) {
//      event.preventDefault(); 
//      let name = document.getElementById("name").value
//      let description = document.getElementById("description").value 
//      let task = {
//          name: name,
//          description: description 
//      }
//      fetch('http://127.0.0.1:3000/tasks', {
//          method: "POST", 
//          headers: {
//              'Accept': 'application/json',
//              'Content-Type': 'application/json'
//            }, 
//          body: JSON.stringify(task) 
//      })
//      .then(resp => resp.json()) 
//      .then(task => {
//          let t = new Task(task.id, task.name, task.description)
//          t.renderTask(); 
//      })
//  } 
//   let tasksForm = document.getElementById("tasks-form")
//   tasksForm.addEventListener("submit", () => {
//       debugger;
//   }) 
// } 
//    let name = document.getElementById("name").value
//    let description = document.getElementById("description").value
 
//    let task = {
//        name: name,
//        description: description,
 
//    }
 
//    fetch('${BASE_URL}/tasks',{
//        method: "POST",
//        headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(task)
//    })
//        .then(resp => resp.json())
//        .then(task => {
//            let t = new Task(task.id, task.name, task.description)
//            t.renderTask(); 
//        })

