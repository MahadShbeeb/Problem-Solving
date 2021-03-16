const dist=(x1,y1,x2,y2)=>{
    return (x1-x2)*(x1-x2)-(y1-y2)*(y1-y2)
}

const meeting=(x1,y1,x2,y2,n,arr)=>{
    let x=0,y=0,r=0
    let points=rectanglePoints(x1,y1,x2,y2)
    for(let row of arr){
       [x,y,r]=row

    }

}

console.log(meeting(2 ,5 ,4 ,2 ,3 ,[[3 ,1 ,2],[5, 3 ,1],[1 ,3 ,2]]))

