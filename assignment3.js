let arr=[120,60,899]
let result=arr.reduce((x,y)=>x+y,0)
console.log(result)
let student=["siva","kiran","venkat","praveen","ram","sailesh"]
let res=student.find((x)=>x=="kiran")
if(res)
{
    console.log("found");
}
else{
    console.log("not found");
}
const makeGreeter=(greeting)=>(name)=>
{
    return greeting+" "+name;
}
res1=makeGreeter("Hello")("Asha")
console.log(res1)

async function loaduser()
{
    try{
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const users=await res.json()
    console.log(users)
    const result=users.map((x)=>x.name)
    console.log(result)
    }
    catch(error)
    {
        console.log(error);
    }
}
loaduser()