const Drinks=(n,drinks)=>{
    return (drinks.reduce((ele,acc)=>ele+acc,0)/n).toFixed(12)
}
console.log(Drinks(4,[0,25, 50, 75]))
