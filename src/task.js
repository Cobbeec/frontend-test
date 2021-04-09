class Task {
constructor(id, name, description) {
    this.id 
    this.name = name; 
    this.description = description; 

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


}