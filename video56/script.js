console.log("Hello I am conditional tutorial");
let age=1;
let grace=2;
age+=grace;
console.log(age);
console.log(age+grace);// addition
console.log(" ");
console.log(age-grace);// subtraction
console.log(" ");
console.log(age*grace);// multiplication
console.log(" ");
console.log(age/grace);// division
console.log(" ");
console.log(age**grace);//exponentiation
if(age!=18)
{
    console.log("You can drive");
}
if((age+grace)>18)
{
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}
// comparison operators
// == means equalto will only check the value   
// === means equal to will check both the value and the type
/*
This is the multiline comment and its syntax is different from the single line comment
*/
console.log(3=="3");
console.log(3==="3");
console.log("3"==="3");

// logical operators
// &&  logical and
// ||  logical or
// !   logical not
console.log((6==7)&&(1==1));
console.log((1==1)||(1==1));
console.log(!true);

if(age!=18)
{
    console.log("You can drive");
}
else if(age==0)
{
    console.log("Are you kidding??");
}
else if(age==1)
{
    console.log("Are you again kidding?");
}
else{
    console.log("You cannot drive");
}
let val=5;
 console.log((val==5)?true:false);// Ternary operator
let a=6;
let b=8;
let c=a>b ?(a-b):(b-a);
console.log(c);
/*
translates to:
if(a>b){
let c=a-b;
}
else{
  let c=b-a;
}
*/