function CheckPrime(){
    var num=getUserInput();
    flag = true;
    
    if(num < 2){
         flag = false;}
    for(i=2;i<Math.sqrt(num);i++){
        if(num % i == 0){
            flag=false;
            break;
        }
    }
    if(flag){
        showResult("given number :" +num+ " is prime");
    }else{
        showResult("given number :" +num+ " is not prime");
    }
}

function Factorial(){
    var num=getUserInput();
    var res=1;
    for(var i=2;i<=num;i++){
        res *= i;
    }
    
     showResult("Factorial is :" +num+ " is :" +res)
}
    
function Factors(){
    var num=getUserInput();
    var result=" ";
    for(i=0;i<=num;i++){
        if(num %i == 0){
            result +=i+" ";
        }
    }
    showResult("Factors of " +num+ " is :" +result)
    
}    
    
function Fibonacci(){
    var num = getUserInput();
    var output = "";
    if(num == 1){
        output += "0";
    }else if(num == 2 ){
        output += "0 1";
    }else{
        var a = 0, b = 1;
        output +="0 1";
        for(var i=3;i<=num;i++){
            c=a+b;
            output += " "+c;
            a=b;
            b=c;
        }
    }
     showResult("Fibonacci of " +num+ " is :" +output)
    
    
} 

function Reverse(){
    var num = getUserInput();

    var rev=0;
    var r=0;
    while(num != 0){
        
    rev=(rev*10)+ num%10;
    num=Math.floor(num/10);}
    
    showResult("Reverse of is  :" +rev);
}

function IsPalindrome(){
    var num = getUserInput();
    num2 =num;
    var rev=0;
    var r=0;
    while(num != 0){
    r = num % 10;    
    rev=(rev*10)+ r;
        num=Math.floor(num/10);
    }
   if(num2 ==rev){
        showResult( +num2+ " is  palindrome")
    }else{
    
    showResult( +num2+ "is not palindrome")
    }
}

function SumofDigit(){
    var num = getUserInput();
    var sum=0;
    while(num !=0){
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    }
    showResult("sum of digits is:" +sum);
}


    function getUserInput(){
        num=document.getElementById("num").value;
        return num;
    }
    function showResult(message){
        document.getElementById("result").innerHTML="<h4>"+message+"</h4>"
    }