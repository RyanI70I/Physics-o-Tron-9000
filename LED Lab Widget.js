function calcValues(){
    //Read input values from the HTML
    var A = parseFloat(document.getElementById("I1").value);
    var B = parseFloat(document.getElementById("I2").value);
    var C = parseFloat(document.getElementById("I3").value);
    //var RMSE= parseFloat(document.getElementById("I4").value);

    //Pass the input to the voltage finding function
    let Voltage = clac(A, B, C);

    //Print an error if the input results in the calc function trying to find the natural log of a negative
    if( isNaN(Voltage)){
        document.getElementById("O1").innerHTML = "You did something wrong, -B/A was negative for some reason, how did you manage that?";
    }
    else
        //Print the output of the function to the O1 box in the HTML
        document.getElementById("O1").innerHTML = Voltage + " V";
}

//Calculate the voltage by finding V when I=.00001 in the fitting function
function clac(a,b,c){
    return -((Math.log((.00001 - b)/a))/c);
}
