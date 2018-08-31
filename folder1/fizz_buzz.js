var result = "";
var divisible3;
var divisible5;
for(var i=1; i<= 100; i++){
	if(i % 3){divisible3 = false;} else {divisible3 = true;}
	if(i % 5){divisible5 = false;} else {divisible5 = true;}
	if(divisible3 & divisible5){result += "fizzbuzz<br />";}
	else if(divisible3){result += "fizz<br />";}
	else if(divisible5){result += "buzz<br />";}
	else {result += String(i) + "<br />"}
}
document.write(result);