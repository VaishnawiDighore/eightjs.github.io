let voltage = 230;
let current = 3;

function Power(voltage, current) {        //creating a function to calculate power
    return voltage * current;             //formula to calculate power i.e  power=voltage*current
}

let power = Power(voltage, current);     //function call Power and store in another variable power
console.log(power);                      //display the power