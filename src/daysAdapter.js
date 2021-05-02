class DaysAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/days'
    }

    fetchDays(){
        fetch(`http://localhost:3000/days`)
        .then(res => res.json())
        .then(days => {  
        console.log(days)
        for (const day of days) {
            let d = new Day(day.id, day.name) 
            d.attachToDom()
            // d.daySelect();
        } //you want to grab select menu, create options, append 
    })
}
    sanitizeAndInitializeDay(data){
        let d = new Day({id: data.id, ...data.attributes})
        d.daySelect()
    }
}