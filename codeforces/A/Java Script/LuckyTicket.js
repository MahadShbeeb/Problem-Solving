const luckyTicket=(n,ticketNumber)=>{
    let count=0,sum1=0,sum2=0
    for (let i of ticketNumber.toString()){i==='4'?count+=1:i==='7'?count+=1:0}
    for(let i=0;i<n/2;i++){sum1+=parseInt(ticketNumber.toString()[i])}
    for(let i=n/2;i<n;i++){sum2+=parseInt(ticketNumber.toString()[i])}
    return count===ticketNumber.toString().length &&sum1===sum2 ?'YES':'NO'
}
console.log(luckyTicket(4,4774))
