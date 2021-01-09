const vanyaAndFence = (n, h, friends) => {
    let shortestFriends = friends.filter((friend) => friend <= h)
    let longestFriends = friends.filter((friend) => friend > h).map((friend) => Math.ceil(friend / h))

    return longestFriends.reduce((acc, ele) => acc + ele, 0) + shortestFriends.length
}
console.log(vanyaAndFence(6, 5, [7, 6, 8, 9, 10, 5]))