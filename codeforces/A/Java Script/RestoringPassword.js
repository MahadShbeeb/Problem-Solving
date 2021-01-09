const restoringPassword=(str,numbers)=>{
    let password=[],i=0
    while (i<=str.length){
            let num=str.substring(i,i+10)
            for (let j=0;j<numbers.length;j++){
                if(num===numbers[j]){
                    password.push(j)
                    break
                }
            }
        i+=10
    }
    console.log(...password)
}
console.log(restoringPassword('10101101111001000010100100011010101101110010110111011000100011011110010110001000',
['1001000010','1101111001','1001000110','1010110111','0010110111',
'1101001101','1011000001','1110010101','1011011000','0110001000']))