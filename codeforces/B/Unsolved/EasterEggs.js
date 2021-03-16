const easterEggs=(num)=>{
    let colors=['R','O','Y','G','B','I','V'],str='',i=0
    while(i<num){
        i>6?str+=colors[i%7]:str+=colors[i]
        i+=1
    }
    return str
}
console.log(easterEggs(13))