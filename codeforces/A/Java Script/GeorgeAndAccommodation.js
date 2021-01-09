const georgeAndAccommodation = (n, rooms) => {
    let count = 0
    rooms.map((room) => {
        for (let i = 0; i < room.length; i++) {
            if (i + 1 < room.length) {
                if (room[i + 1] - room[i] !== 0) {
                    count += 1
                }
            }
        }
    })
    return count
}
console.log(georgeAndAccommodation(3, [
    [1, 1],
    [2, 2],
    [3, 3]
]))