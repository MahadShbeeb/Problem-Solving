const theNewYearMeetingFriends = (distances) => {
    distances = distances.sort((a, b) => a - b)
    return Math.floor(distances[0] + distances[distances.length - 1]) / 2
}
console.log(theNewYearMeetingFriends([4, 1, 7]))