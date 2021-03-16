// const encoding=(n,str)=>{
//     let newStr=''
//     while (str.length>1){
//         if (str.length%2!==0){
//             newStr+= str[Math.floor(str.length/2)]
//             str=str.slice(0,Math.floor(str.length/2))+str.slice(Math.floor(str.length/2)+1)
//         }else{
//             newStr+= str[str.length/2-1]
//             str=str.slice(0,str.length/2-1)+str.slice((str.length/2-1)+1)
//         }
//        }
//     return newStr+str
// }
const decoding=(n,str)=>{
let arr=[str[0]],i=0
str=str.slice(1)
while(i<str.length){
    if(str.length-i>1){
        arr.unshift(str[i])
        arr.push(str[i+1])
    }else{arr.push(str[i])}
    i+=2
}
return arr.join("")
}
console.log(decoding(5,'logva'))
//volga
