const array=(n,arr)=>{
    let negativeSet=new Set(), posativeSet=new Set(),zeroSet=new Set()
    for (let element of arr){
        element>0?posativeSet.add(element):element<0?negativeSet.add(element):zeroSet.add(element)
    }
    if (negativeSet.size %2!==0 && posativeSet.size===0){
        negativeSet=[...negativeSet]
        posativeSet.add(negativeSet[negativeSet.length-1])
        posativeSet.add(negativeSet[negativeSet.length-2])
        negativeSet=negativeSet.filter(n=>negativeSet.indexOf(n)!==negativeSet.length-2&&negativeSet.indexOf(n)!==negativeSet.length-1)
        console.log(negativeSet.length,...negativeSet)
    }
    console.log(negativeSet.size,...negativeSet)
    console.log(posativeSet.size,...posativeSet)
    console.log(zeroSet.size,...zeroSet)
}
console.log(array(3,[-1 ,2 ,0]))