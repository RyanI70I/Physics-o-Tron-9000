function calcValues(){
    var A = parseFloat(document.getElementById("I1").value);
    var B = parseFloat(document.getElementById("I2").value);
    var C = parseFloat(document.getElementById("I3").value);
    //var RMSE= parseFloat(document.getElementById("I4").value);



    x = clac(A,B,C);
    document.getElementById("O1").innerHTML = x + " V";



}

function clac(a,b,c){
    let y = .00001 - b;
    y = y / a;
    y = Math.log(y);
    y = y/c;
    return -y;
}
