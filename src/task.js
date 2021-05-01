class Task {
    static all = [] 
constructor(id, name, description, day_id, dayList) {
    this.id = id; 
    this.name = name; 
    this.description = description; 
    this.day_id = day_id; 
    this.dayList = dayList 
    // this.taskList = document.getElementById(`task-list`)
    Task.all.push(this) 
}

    attachtoDom() {
        console.log(this)
    }
get taskList() {
    return document.getElementById(`task-list`)
}

addEventListeners(){
    this.element.addEventListener('click', this.handleListClick)
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
<button class="update" data-id="${this.id}onclick="updateTask()">Update</button>
`
}
//rendertask is an instance method called on new instances you're making here


}