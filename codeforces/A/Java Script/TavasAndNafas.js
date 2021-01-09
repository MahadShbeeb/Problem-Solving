const tavasAndNafas=(num)=>{
    let numbers=['zero','one','two','three','four','five','six','seven','eight','nine']
    let numbers11_20=['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    let dozens=['ten','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety']
    if (num.toString().length===1){return numbers[num]}
    else{
        if(num.toString()[1]==='0'){return dozens[parseInt(num.toString()[0])-1]}
        else if (num.toString()[0]==='1'){return numbers11_20[parseInt(num.toString()[1])-1]}
        else{return dozens[parseInt(num.toString()[0])-1]+'-'+numbers[parseInt(num.toString()[1])]}    
    }
}
console.log(tavasAndNafas(34))