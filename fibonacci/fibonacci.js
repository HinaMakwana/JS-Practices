$(document).ready(function(){
    $("#btn").click(function(){
        let data = document.getElementById("num").value;
        let n1 = 0, n2 = 1, n3;
        if(data < 0){ $("#print").text("Please Input Positive value!");}
        if(data == 0){ $("#print").text("Please enter greater than zero input.");}
        let val = "";
        for(i = 0 ; i < data ; i++){
                val += (n1 +" ");
                n3 = n1 + n2;
                n1 = n2;
                n2 = n3;
                document.getElementById("print").innerHTML = "Fibonacci Series is: " + val;
        }
        
    });
});