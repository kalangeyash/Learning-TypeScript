var user = {
    fname: "Yash",
    age: 21
};
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
var ans = isLegal(user);
console.log(ans);
