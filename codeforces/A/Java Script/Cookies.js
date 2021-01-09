const cookies = (cookies) => {
    let oddCount = 0
    let evenCount = 0
    cookies.map((cookie) => {
        cookie % 2 === 0 ? evenCount += 1 : oddCount += 1
    })
    return oddCount % 2 === 0 ? evenCount : oddCount
}
console.log(cookies([1, 2, 2, 3, 4, 4, 4, 2, 2, 2]))