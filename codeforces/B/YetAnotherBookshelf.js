const yetAnotherBookshelf = (n,bookshelf) => {
    let shifts = 0
    for (let i=bookshelf.indexOf(1)+1;i<bookshelf.lastIndexOf(1);i++){
        if (bookshelf[i] == 0)
            shifts += 1
    }
    return shifts
}
console.log(yetAnotherBookshelf(3,[1, 1, 0 ,1 ,1]))
