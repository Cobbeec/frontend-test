class Task {
    static all = [] 
constructor(id, name, description, day_id, dayList) {
    this.id = id; 
    this.name = name; 
    this.description = description; 
    this.day_id = day_id; 
    this.dayList = dayList 
    this.element = document.createElement('div')
    this.element.id = `task-${this.id}`
    Task.all.push(this) 
}

attachtoDom() {
        console.log(this)
    }
get taskList() {
    return document.getElementById(`task-list`)
}

updateTaskOnDom({name, description}){
    this.name = name
    this.description = description
    this.name = name 
    this.renderTask()
    this.addEventListeners()

addEventListeners()
    this.element.addEventListener('click', this.handleListClick)
    this.element.addEventListener('click', this.update)
}


renderTask () {
    let tasksDiv = document.getElementById("tasks-container")
    
    tasksDiv.innerHTML +=
`
<ul>
<li> Name: ${this.name} - Description: ${this.description}
</li>

</ul>
<button class="delete-button" data-id=${this.id} onclick="deleteTask()">Delete</button>
<button class="update-button" data-id=${this.id} onclick="updateTask()">Update</button>
`
}
} 

// handleListClick = (e) => {
//     let id = e.target.dataset.id
//     if (e.target.className === 'update'){
//          e.target.className = "save"
//          e.target.innerText = "Save"
//          this.addUpdateTaskFields(id)
//      } else if(e.target.className === 'save'){
//          e.target.className = "update"
//          e.target.innerText = "Update"
//          Task.sendPatchRequest(id)
//      }

//rendertask is an instance method called on new instances you're making here

// updateFunction() {
//     document.getElementById("update-button").onclick = Bar(); 
// }


// static findById(id){
//     return Task.all.find(task => task.id == id)
// }

// addEventListeners(){
//     this.element.addEventListener('click', this.handleListClick)
//     this.element.addEventListener('click', this.update)

// }

// get taskList(){
//     return document.getElementById('task-list')
// }


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