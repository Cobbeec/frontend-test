class DaysAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/days'
    }

    fetchDays(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            // console.log(response)
            response.data.forEach(el => {
                this.sanitizeAndInitializeDay(el)
            })
        })
    }
    sanitizeAndInitializeDay(data){
        let d = new Day({id: data.id, ...data.attributes})
        d.attachToDom()
    }
}