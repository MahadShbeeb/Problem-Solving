const lalaLandAndAppleTrees=(n,apples)=>{
    let x=0,a=0,negArr=[],posArr=[]
    for (let apple of apples){
        [x,a]=apple
        if (x<0){negArr.push(a)}
        if (x>=0){posArr.push(a)}
    }
    return posArr.length>negArr.length? 
    posArr.filter(ele=>posArr.indexOf(ele)<=negArr.length).reduce((ele,acc)=>acc+ele,0)+
    (negArr.filter(ele=>negArr.indexOf(ele)<posArr.length).reduce((acc,ele)=>acc+ele,0)):
    negArr.length>posArr.length? 
    negArr.filter(ele=>negArr.indexOf(ele)<=posArr.length).reduce((ele,acc)=>acc+ele,0)+
    (posArr.filter(ele=>posArr.indexOf(ele)<negArr.length).reduce((acc,ele)=>acc+ele,0)):
    posArr.reduce((acc,ele)=>acc+ele,0)+ negArr.reduce((acc,ele)=>acc+ele,0)
}
console.log(lalaLandAndAppleTrees(2,[[-1,5],[1,5]]))
