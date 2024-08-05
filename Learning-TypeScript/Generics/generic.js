function identity(arg) {
    return arg;
}
var output1 = identity("yash");
var output2 = identity(872489);
console.log("output of 1 " + output1);
console.log("output of 2 " + output2);
////////////////////////////////////////
function getFirstEleSoToUpperCaseIT(arr) {
    return arr[0];
}
var userFName = getFirstEleSoToUpperCaseIT(["Yash", "Kalange"]);
console.log(userFName.toUpperCase());
