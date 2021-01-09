const lindMail = (mails) => {
    let res = []
    let max = min = 0
    for (let i = 0; i <= mails.length - 1; i++) {
        if (i === 0) {
            max = Math.max(Math.abs((mails[i] - mails[mails.length - 1])), Math.abs((mails[i] - mails[0])))
            min = Math.min(Math.abs(mails[i] - mails[i + 1]))
            res.push(min)
            res.push(max)
        } else if (i === mails.length - 1) {
            max = Math.max(Math.abs((mails[i] - mails[mails.length - 1])), Math.abs((mails[i] - mails[0])))
            min = Math.min(Math.abs((mails[i] - mails[i - 1])))
            res.push(min)
            res.push(max)
        } else {
            max = Math.max(Math.abs((mails[i] - mails[mails.length - 1])), Math.abs((mails[i] - mails[0])))
            min = Math.min(Math.abs((mails[i] - mails[i - 1])), Math.abs((mails[i] - mails[i + 1])))
            res.push(min)
            res.push(max)
        }
    }
    return res
}
console.log(lindMail([-1, 1]))