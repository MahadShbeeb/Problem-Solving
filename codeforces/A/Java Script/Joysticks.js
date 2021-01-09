const joysticks=(firstJoystick,secondJoystick)=>{
    let minutes=0
    while(firstJoystick !==0 && secondJoystick !==0){
            firstJoystick+=1
            secondJoystick-=2
            minutes+=1
            if(secondJoystick<=2){
                [firstJoystick,secondJoystick]=[secondJoystick,firstJoystick]
            }
    }
return minutes
}
console.log(joysticks(3,5))