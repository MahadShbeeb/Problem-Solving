const yetAnotherPalindromeProblem = (n,array) => {
    let i=0,substring=''
    while (i<n){
        substring=array.join("").substring(i,n)
        if (substring===substring.split("").reverse().join("") && substring.length>=3){
            return 'YES'
        }
        i+=1
    }
    return 'NO'
}
console.log(yetAnotherPalindromeProblem(4,[1 ,2 ,2 ,1]))
