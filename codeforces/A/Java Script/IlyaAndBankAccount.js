const ilyaAndBankAccount=(accountMoney)=>{
    accountMoney=accountMoney.toString()
    let firstChoice=parseInt(accountMoney.substring(0,accountMoney.length-1))
    let secondChoice=parseInt(accountMoney.substring(0,accountMoney.length-2)+accountMoney[accountMoney.length-1])
    return Math.max(firstChoice,secondChoice,accountMoney)===0?0:Math.max(firstChoice,secondChoice,accountMoney)
}
console.log(ilyaAndBankAccount(2230))
