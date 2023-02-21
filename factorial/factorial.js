function get()  {
    function factorial(x) {
        if (x == 0) {
            return 1;
        }
        else {
            return x * factorial(x - 1);
        }
    }
    const num = document.getElementById("num").value;
    //const num = prompt('Enter a positive number: ');
    if (num >= 0) {
        const result = factorial(num);
        document.getElementById("print").innerHTML= (`The factorial of ${num} is ${result}`);
    }
    else {
        document.getElementById("print").innerHTML=('Enter a positive number.');
    }
}