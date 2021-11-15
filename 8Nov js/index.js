var n = 10;
var height = 30;
var width = 20;

function wallPaint(n, height, width) {   // creating a function wallPaint
    
    var areaOfWall = height * width;    //calculate area of wall  
    
    if (areaOfWall % n == 0)          
        return areaOfWall / n;
    
    return (areaOfWall/n)+1;
}

var totalWallPaint = wallPaint(n, height, width);  

console.log(totalWallPaint);