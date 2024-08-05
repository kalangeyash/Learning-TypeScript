function identity<T>(arg: T)
{
    return arg;
}

const output1 = identity<string>("yash")
const output2 = identity<number>(872489)
console.log("output of 1 " + output1)
console.log("output of 2 " + output2)


////////////////////////////////////////

function getFirstEleSoToUpperCaseIT<T>(arr : T[]){
    return arr[0];

}

const userFName = getFirstEleSoToUpperCaseIT(["Yash","Kalange"])
console.log(userFName.toUpperCase())

