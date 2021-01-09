const leftHandersRightHandersAndAmbidexters = (left, right, leftAndRight) => {
    if (leftAndRight === 0 && right === 0 || leftAndRight === 0 && left === 0 || leftAndRight === 0 && left === 0 && right === 0) {
        return 0
    }
    let team = Math.min(left, right) + leftAndRight + Math.max(left, right)
    return team % 2 !== 0 ? team -= 1 : team
}
console.log(leftHandersRightHandersAndAmbidexters(1, 4, 2))