var savedPassword = "saylani";

var userPassword= prompt("Please enter password \nPassword is saylani");

if(userPassword ===""){
    alert("Please enter a Password");
}
else if(userPassword === savedPassword){
    document.write("Correct! The password you entered matches the original password");
}
else{
    document.write("Incorrect Password!");
}