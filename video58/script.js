function nice(name)
{
    console.log("Hey " + name + " you are so nice!")
}
nice("Harry");
nice("Rohan");
nice("Palak");
nice("Sonia");

function sum(a,b,c=3)
{
    return a+b+c;
}
result1=sum(956589,1);
console.log("The sum of these numbers are:",result1);

result2=sum(6,7,c=1);
console.log("The sum of these numbers are:",result2);

result3=sum(7);
console.log("The sum of these numbers are:",result3);

const func1=(x)=>{
   console.log("I am an arrow function",x); 
}
func1(45);
func1(890);

