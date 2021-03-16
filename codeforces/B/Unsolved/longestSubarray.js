let arr=[1,1,1,2,2,3,3],n=4
if (arr.length===1||arr.length===2){console.log(arr.length)}
if ([...new Set([...arr])]===arr.length){console.log(2)}
