const multiplicationTable=(num,occu)=>{
    let count=0
for (let i=1;i<=num;i++){
for (let j=1;j<=num;j++){
if (i*j===occu){
count+=1
}
}
}
return count
}
console.log(multiplicationTable(6 ,12))