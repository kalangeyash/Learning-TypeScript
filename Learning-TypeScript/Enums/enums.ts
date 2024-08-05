
type typeDirection = "Up" | "Down" | "Left" | "Right"
function doSomethingUsingType(keyPressed :typeDirection){
    if(keyPressed == "Up")
     {
        // logicc
     }
 }
 doSomethingUsingType("Up")



enum Direction {
    Up = "up",  
    Down = "down",
    Left = "left",
    Right = "right"
}
 function doSomethingUsingEnums(keyPressed :Direction){
    if(keyPressed == Direction.Up)
     {
//  some logic
     }
 }

 doSomethingUsingEnums(Direction.Up)