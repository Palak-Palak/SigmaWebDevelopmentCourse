console.log("I am a tutorial on loops")

let a=1;
console.log(a);
console.log(a+1);
console.log(a+2);

for(let i=0;i<10;i++)
{
   console.log(i+" ");
}
let obj={
     name:"Harry",
     role:"Programmer",
     company:"CodeWithHarry AI"
}
for (const key in obj) {
        const element = obj[key];
        console.log(element)
 }
for(const c of "PalakJindal")
{
    console.log(c);
}

for(const c of "Harry")
{
    console.log(c);
}
let i=1;
while(i<6)
{
    console.log(i);
    i++;
}
i=0;
do{
    console.log(i);
    i++;
}while(i<6);