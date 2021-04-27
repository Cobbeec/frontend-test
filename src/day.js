class Day {

    static all = []

    constructor({date}) {
        this.date = date
        this.element = document.createElement('li')
        this.dayList = document.getElementById('day-list')
        Day.all.push(this)
}

attachToDom(){
    this.dayList.append(this.fullRender())
    this.addEventListeners()
}


 renderDay () {
    let daysDiv = document.getElementById("days-container")
    
    daysDiv.innerHTML +=
`
<ul>
<li> Name: ${this.date} 
</li>
</ul>

`
}
}   