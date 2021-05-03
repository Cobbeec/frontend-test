const daysAdapter = new DaysAdapter
const updateForm = document.getElementById('update-form')

document.addEventListener("DOMContentLoaded", () => {
    createForm();
    fetchTasks() 
    daysAdapter.fetchDays() 
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

 function addTasks(response){
     response.data.forEach(task =>{
        createForm(task)

     })
 }

 function createForm() {
    let tasksForm = document.getElementById ("tasks-form")
    tasksForm.innerHTML +=
    `
    <script>
    <function dayselect(){
        var daylist=document.getElementById("dayList"); 
        document.getElementById("daytask").value=daylist.options[daylist.selectedIndex].text;
    }
    </script> 
    <form>
    Name: <input type="text" id="name">
    Description: <input type="text" id="description">
    Select a day: 
    <select id="dayList" onchange="dayselect()">
    <option> Monday </option>
    <option> Tuesday </option>
    <option> Wednesday </option>
    <option> Thursday </option>
    <option> Friday </option>
    <option> Saturday </option>
    <option> Sunday </option>
    </select> 
    Day Id: <input type"integer" id="day_id">
    <input type="submit" value="Create Task"> 
    </form>
    `
  tasksForm.addEventListener("submit", taskFormSubmission)
  debugger; 
  console.log()
 }

 function taskFormSubmission(event) {
    event.preventDefault(); 
    let name = document.getElementById("name").value
    let description = document.getElementById("description").value 
    let day_id = document.getElementById("day_id").value 
    let dayList = document.getElementById("dayList").value 
    let task = {
        name: name,
        description: description, 
        day_id: day_id ,
        dayList: dayList
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
    .then(response => response.json()) 
    .then(task => {
        let t = new Task(task.id, task.name, task.description, task.dayList) 
        t.renderTask();
    })
} 


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

function addUpdateTaskFields(taskId){
    let task = document.querySelector(`#task-${taskId} li`)
    let name = task.querySelector('.name').innerText
    let description = task.querySelector('.description').innerText


    let updateForm = `
    <input type="text" value="${name}" name="name" id="update-name-${taskId}">
    <input type="text" name="description" value="${description}" id="update-description-${taskId}">
    `

    let formDiv = document.createElement('div')
    formDiv.id = `update-form-${taskId}`
    formDiv.innerHTML = updateForm
    task.append(formDiv)
}


function sendPatchRequest(taskId){
    const updateTaskName = document.getElementById(`update-name-${taskId}`)
    const updateTaskDescription = document.getElementById(`update-description-${taskId}`)
 

    let taskObj = {
        name: updateTaskName.value,
        description: updateTaskDescription.value,
    }

    let configObj = {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(taskObj)
    }

    fetch(`http://localhost:3000/tasks/${taskId}`, configObj)
    .then(res => res.json())
    .then(response => updateTaskOnDom(response.data))
    // remove form
debugger; 
    let form = document.getElementById(`update-form-${taskId}`)
    form.remove()
}

function updateTaskOnDom(task){
    let liTask = document.querySelector(`#task-${task.id} li`)
    liTask.querySelector('.name').innerText = task.attributes.name
    liTask.querySelector('.description').innerText = task.attributes.description
}

// handleListClick = (e) => {
//     let id = e.target.dataset.id
//     if (e.target.className === "delete"){
//          Task.deleteTask(id)
//     } else if(e.target.className === 'update'){
//          e.target.className = "save"
//          e.target.innerText = "Save"
//          this.addUpdateTaskFields(id)
//      } else if(e.target.className === 'save'){
//          e.target.className = "update"
//          e.target.innerText = "Update"
//          Task.sendPatchRequest(id)
//      }
// }

document.addEventListener("DOMContentLoaded", () => {
    // tasksAdapter.fetchTasks() 
    daysAdapter.fetchDays() 
 })