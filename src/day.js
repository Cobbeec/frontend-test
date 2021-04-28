class Day {

    static all = []

    constructor(date) {
        this.id 
        this.date = date
        this.element = document.createElement('li')
        this.dayList = document.getElementById('day-list')
        Day.all.push(this)
}

attachToDom(){
    this.dayList.append(this.fullRender())
    this.addEventListeners()
}


fullRender(){
    this.element.innerHTML = `
    <h3>${this.name}</h3>
    `
    return this.element
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