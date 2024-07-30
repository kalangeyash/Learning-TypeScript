interface userInterface {
    fname: string,
    age : number
}

const user=  {
    fname: "Yash",
    age:21
}

function isLegal(user : userInterface):boolean{
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}
const ans:boolean = isLegal(user)
console.log(ans)