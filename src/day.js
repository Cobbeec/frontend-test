class Day {
    static all = []
    constructor(id, name) {
        this.id = id 
        this.name = name 
        // this.element = document.createElement('li')
        // this.dayList = document.getElementById('day-list')
        Day.all.push(this)
}

attachToDom(){
    this.dayList.append(this.renderDay())
}

get dayList() {
    return document.getElementById('day-list')
}

renderDay(){
    let daysDiv = document.getElementById("days-container")
    
    daysDiv.innerHTML +=
`
<ul>
<li> Name: ${this.name} 
</li>
</ul>
`
}


// daySelect(){
//     const dropdown = document.getElementById
//     ('day-select')
//     let option = document.createElement
//     ('option')
//     option.id = "day_id"
//     option.value= `${day.id}`
//     option.innerText="name"
//     dropdown.appendChild(option)
// }


// addEventListeners(){
//     this.element.addEventListener('click', this.displayTasks)
// }


get tasks(){
    return Task.all.filter(i => i.dayList == this.id)
}

static find(id){
    return Day.all.find(d => d.id == id)
}

sortedTasks(){
    return this.tasks.sort((a,b) => a.name - b.name)
}

} 


//  renderDay () {
//     let daysDiv = document.getElementById("days-container")
    
//     daysDiv.innerHTML +=
// `
// <ul>
// <li> Name: ${this.date} 
// </li>
// </ul>

// `
// }
// }  
