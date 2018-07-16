function calc(ope){
    var num1=document.getElementById("num1").value;
     var num2=document.getElementById("num2").value;
    var message;
    switch(ope){
        case "add":
            message= +num1+ " + " +num2+ " = " +(num1 + num2);
            break;
        case "sub":
            message= +num1+ " - " +num2+ " = " +(num1 - num2);
            break;
        case "mul":
            message= +num1+ " * " +num2+ " = " +(num1 * num2);
            break; 
        case "div":
            message= +num1+ " / " +num2+ " = " +(num1 / num2);
            break;
        case "mod":
            message= +num1+ " % " +num2+ " = " +(num1 % num2);
            break;    
    }
    document.getElementById("result").innerHTML=message;
}
