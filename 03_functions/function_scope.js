

{} //its called the scope

if(true){
   let a = 10;
    const b = 20;
    var c = 30; 
}
// console.log(a) ---> it is not printing beacuse it not define in outer scope
// console.log(b)  ---> same for the b 
// console.log(c)   --- but c is printed with the value of 30... why? it is 'var' or no any let, const or var

function one(){
    const username = "Ayush";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    console.log(website);
    two();
}
one();  

 
if (true){
    const username = "Ayush";
    if(username === "Ayush"){
        const website = " youtube";
        console.log(username + website);
        
    }
}

console.log(addone(5));
function addone(value){
    return value+1;
}

console.log(addtwo(5));
const addtwo = function (value){
    return value+1;
}