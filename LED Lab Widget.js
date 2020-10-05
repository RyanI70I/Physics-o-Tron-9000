function calcValues(){
    var A = parseFloat(document.getElementById("I1").value);
    var B = parseFloat(document.getElementById("I2").value);
    var C = parseFloat(document.getElementById("I3").value);
    //var RMSE= parseFloat(document.getElementById("I4").value);

    let Voltage = clac(A, B, C);

    if( isNaN(Voltage)){
        document.getElementById("O1").innerHTML = "You did something wrong, -B/A was negative for some reason, how did you manage that?";
    }
    else
        document.getElementById("O1").innerHTML = Voltage + " V";
}

function clac(a,b,c){
    return -(Math.log((.00001 - b)/a))/c;
}
