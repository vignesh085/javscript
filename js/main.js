function checknum(){
    var num=document.getElementById("num").value;
    var message;
    if (num%2==0)
        {
           message ="Number "+num+" is even";
        }else{
            message="Number "+num+" is odd";
            
        }
    document.getElementById("res").innerHTML=message;
}

function ebill(){
    var units= document.getElementById("units").value;
    var min_amount=50;
    var amount=0;
    var total_amount=0;
    if(units>=0 && units <100)
        {
            amount=units*5
        }
    else if(units>=100 && units<500)
        {
            amount=unit*6
        }
    else{
        amount=units*10
    }
    total_amount=min_amount+amount;
    message="total bill is :"+total_amount;
    document.getElementById("bills").innerHTML=message;
}