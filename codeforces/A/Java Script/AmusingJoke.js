const amusingJoke=(guestName,hostName,pileInTheDoor)=>{
  return (guestName+hostName).split("").sort().join("") === pileInTheDoor.split("").sort().join("") ?'YES':'NO'
}
console.log(amusingJoke('PAPAINOEL','JOULUPUKKI','JOULNAPAOILELUPUKKI'))













