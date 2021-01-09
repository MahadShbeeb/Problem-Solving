const secondOrderStatistics = (nums) => {
    return [...new Set(nums.sort((a, b) => a - b))][1]
}
console.log(secondOrderStatistics([1, 2, 3, 1, 1]))