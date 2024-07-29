function greet(x:string) {
    console.log("hello" + x)
}
function sum(a : number,b :number): number{
    return a+b
}
const fname : string = " Yash <3"
greet(fname)

const a :number = 7000;
const b : number = 7;

const c : number =sum(a,b)
console.log(c)

function isAdult(age :number){
    if(age>=18)
    {
        console.log("iS 18 + ")
        return true
    }
    else{
        console.log("not ")
        return false;
    }
}

const myAge = 17;
const legal = isAdult(myAge)

console.log(legal)

function checkLegalAfterOneSec(isAdult :Function){

    setTimeout(() => {
       isAdult()
    }, 5000);
    
}

checkLegalAfterOneSec(isAdult);