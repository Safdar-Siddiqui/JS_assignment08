let result = document.getElementById("value");


let a= prompt("Please enter a number or alphabet");

if(a>=-9999999 && a<=9999999){
    document.write("Given input is a Number which is: " + a);
}
else if(a>="A" && a<="Z"){
    document.write("Given input is a Uppercase letter which is: " + a);
}
else if(a>="a" && a<="z"){
    document.write("Given input is a Lowercase letter which is: " + a);
}
else{
    document.write("Given input is a special Character which is: " + a);
    
}

