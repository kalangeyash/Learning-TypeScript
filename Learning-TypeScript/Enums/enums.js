function doSomethingUsingType(keyPressed) {
    if (keyPressed == "Up") {
        // logicc
    }
}
doSomethingUsingType("Up");
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
})(Direction || (Direction = {}));
function doSomethingUsingEnums(keyPressed) {
    if (keyPressed == Direction.Up) {
        //  some logic
    }
}
doSomethingUsingEnums(Direction.Up);
