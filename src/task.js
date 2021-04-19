class Task {
constructor(id, name, description, day_id) {
    this.id = id; 
    this.name = name; 
    this.description = description; 
    this.day_id = day_id 

}
renderTask () {
    let tasksDiv = document.getElementById("tasks-container")
    
    tasksDiv.innerHTML +=
`
<ul>
<li> Name: ${this.name} - Description: ${this.description}
</li>

</ul>

`
}
//rendertask is an instance method called on new instances you're making here

}