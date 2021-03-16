const { chocolate } = require("color-name")

const devuTheDumbGuy=(n,x,chapters)=>{
    let i=0,hours=0
    x+=1
    chapters.sort()
    while (i<n){
        x>1?x-=1:x=1
        hours+=chapters[i]*x
        i+=1
    }
    return hours
}
console.log(devuTheDumbGuy(3 ,3,[1, 1 ,1]))
