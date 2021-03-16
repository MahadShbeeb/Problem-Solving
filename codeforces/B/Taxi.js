const taxi=(petra,petraRaise,driver,driverRaise)=>{
    let min=1000000
    while(driver>petra){
    petra+=petraRaise
    driver-=driverRaise
        if (min>petra-driver && petra-driver>0){
            min = petra-driver
            return petra
        }
    }
}
console.log(taxi(150,50,1000,100))