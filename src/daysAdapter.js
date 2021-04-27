class DaysAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/days'
    }

    fetchDays(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(days => {
        console.log(days)
        for (const day of days) {
            let d = new Day(day.date)
            d.renderDay();
        }
    })
 }
    sanitizeAndInitializeDay(data){
        debugger; 
        let d = new Day({id: data.id, ...data.attributes})
        d.attachToDom()
    }
}