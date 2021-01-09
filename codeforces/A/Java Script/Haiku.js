const haiku=(phrases)=>{
let vowels='aeiou'
let vowelsCounter=phraseCounter=0
for (let phrase of phrases){
    vowelsCounter=0
    for (let letter of phrase.split("")){
        vowels.includes(letter)?vowelsCounter+=1:''
    }
    vowelsCounter===5||vowelsCounter===7?phraseCounter+=1:''
}
return phraseCounter===phrases.length?'YES':'NO'
}
console.log(haiku(['on  codeforces ','beta round is running','a rustling of keys' ]))
