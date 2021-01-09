const translation = (str1, str2) => {
    if (str1.length === str2.length) {
        if (str1.split("").reverse().join("") === str2) {
            return 'YES'
        }
    }
    return 'NO'
}
console.log(translation('code', 'eodc'))