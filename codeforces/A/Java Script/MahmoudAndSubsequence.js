const mahmoudAndSubsequence = (firstString, secondString) => {
    return firstString.length === secondString.length ? '-1' : firstString.length > secondString.length ? firstString.length : secondString.length
}
console.log(mahmoudAndSubsequence('abc', 'bskc'))