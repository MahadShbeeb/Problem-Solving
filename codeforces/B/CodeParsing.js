const codeParsing=(str)=>{
    while (str.includes('yx')){ str=str.replace('yx','xy') }
    while (str.includes('xy')){ str=str.replace('xy','') }
    return str
}
console.log(codeParsing('yxyxy'))