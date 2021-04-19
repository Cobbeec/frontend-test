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
        console.log('Log 2 - Task Data From Response = ');
        console.log(task);
        let t = new Task(task.id, task.name, task.description, task.day_id)
        console.log('Log 3 - Task Object = ');
        console.log(t);
        t.renderTask(); 
    })
} 
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

