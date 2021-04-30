const daysAdapter = new DaysAdapter

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
     response.data.forEach(item =>{
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



// sendPatchRequest(taskId)
//     const name = document.getElementById(`update-name-${taskId}`).value
//     const description = document.getElementById(`update-description-${taskId}`).value
//     const day_id = document.getElementById(`update-day_id-${taskId}`).value

//     let taskObj = {
//         name, 
//         description,
//         day_id
//     }

//     let configObj = {
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(taskObj)
//     }

//     function updateTask () {
//         let taskId = (event.target.dataset.id) 
//         fetch(`http://localhost:3000/tasks/${taskId}`,{
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(itemObj)
        
//      }) 
//      .then(resp => resp.json()) 
//      .then(task => {alert(task.message)
//      })
//     this.location.reload() 
//     }
    

//     let form = document.getElementById(`update-form-${taskId}`)
//     form.remove()




// updateTaskOnDom({name, description, day_id}){
//     this.name = name
//     this.description = description
//     this.day_id = day_id 
//     this.renderTask()
//     this.addEventListeners()
// }

// addUpdateTasklds(taskId){
//     let task = document.querySelector(`#task-${taskId} li`)
//     let updateForm = `
//     <input type="text" value="${this.name}" name="name" id="update-name-${taskId}">
//     <input type="text" name="description" value="${this.description}" id="update-description-${taskId}">
//     <input type="date" name="day_id" value="${this.day_id}" id="update-day_id-${taskId}">
//     `
//     let formDiv = document.createElement('div')
//     formDiv.id = `update-form-${taskId}`
//     formDiv.innerHTML = updateForm
//     task.append(formDiv)
// }

// handleListClick = (e) => {
//     let id = e.target.dataset.id
//       if(e.target.className === 'update'){
//          e.target.className = "save"
//          e.target.innerText = "Save"
//          this.addUpdateTaskFields(id)
//      } else if(e.target.className === 'save'){
//          e.target.className = "update"
//          e.target.innerText = "Update"
//          Task.sendPatchRequest(id)
//      }
// }
