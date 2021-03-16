const accurateLee=(n,strings)=>{
    let is_present_10=false,leading_zeroes=0,trailing_ones=0
    for (let string of strings){
        is_present_10 = false
        if (string.includes('10')){is_present_10=true}
        let i = 0
        while (i < n && string[i] == '0'){i += 1}
        leading_zeroes = i
        i = string.length-1
        while (i >= 0 && string[i] == '1'){i -= 1}
        trailing_ones = string.length - i - 1        
        console.log (!is_present_10?string:`${'0'.repeat(leading_zeroes)}0${'1'.repeat(trailing_ones)}`)
    }
}
console.log(accurateLee(5,['0001111111','0101','11001101','1110000000','1']))

