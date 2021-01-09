const holidays=(days)=>{
    let daysOff=0
    while(days>=7){
        days-=7
        daysOff+=2    
    }
    console.log((daysOff)+' '+(days+daysOff))
}
console.log(holidays(2))