const balancedArray=(n)=>{
    let x=0
    if (n % 4 != 0){return "NO"}
    let evenHalf = "", oddHalf = ""
    for (let i=1;i< n/2 + 1;i++)
        evenHalf += (2 * i).toString() + " "
    for(let j=1;j<n/2;j++)
        oddHalf += ((2 * j) - 1).toString()  + " "
    for (let k=0;k<n/2;k++){
        x+=parseInt(evenHalf.split(" ")[k])
        x-= k>=oddHalf.split(" ").length-1 ?0:parseInt(oddHalf.split(" ")[k])
    }
    oddHalf += x.toString() 
    return "YES" + "\n" + evenHalf + oddHalf   
}
console.log(balancedArray(8))
