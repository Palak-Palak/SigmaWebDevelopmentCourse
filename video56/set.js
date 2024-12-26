let age=14;
console.log((age>10) && (age<20));

let val=10;
 
let num=6;
if(num%2==0 && num%3==0)
{
    console.log(true);
}
else{
    console.log(false);
}

let n=56;
if(num%2==0)
{
    console.log("It is divisible by 2");
}
else if(num%3==0)
{
    console.log("It is divisible by 3");
}
else{
    console.log("It is not divisible by 2 and 3 both");
}

let age1=23;
console.log((age1>18)?"You can drive":"You cannot drive");

let number=30;
switch(number)
{
    case 1:
        if(number>30)
        {
            console.log(true);
        }
    case 2:if(number<30)
    {
        console.log(false);
    }
    default:
        console.log("Bye");
}
