const aGoodContest = (participants) => {
    let res = ''
    participants.map((participant) => {
        if (parseInt(participant.split(" ")[1]) >= 2400 && parseInt(participant.split(" ")[2]) > parseInt(participant.split(" ")[1])) {
            res = 'YES'
        }
    })
    return res === 'YES' ? res : 'NO'
}
console.log(aGoodContest(['Burunduk1 2526 2537', 'BudAlNik 2084 2214', 'subscriber 2833 2749']))