var userInput = +prompt("Please enter a Number");

if(userInput > 0){
    document.write("You have entered a Positive Number");
}
else if (userInput < 0){
    document.write("You have entered a Negative Number");
}
else{
    document.write("You have entered Zero");
}