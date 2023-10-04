var int1 = +prompt("Please enter 1st Number to compare");
var int2 = +prompt("Please enter 2nd Number to compare");

if(int1 > int2){
    document.write(int1);
}
else if (int1 < int2){
    document.write(int2);
}
else{
    document.write("Both Numbers are equal");
}