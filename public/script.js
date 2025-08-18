
//let maxAge = window.prompt("Enter your max age : ", "60");
// let snack = window.prompt("What snack do you eat every day? : ", "rice crackers");
// let numperday = window.prompt("Now how many do you eat every day? : ", "3");
// let age = window.prompt("Lastly, how old are you now? : ", "14");

if (confirm('Did you enter the correct values for ' + age + " " + snack + " " + numperday + " " + maxAge + '?'))
{
    total = (numperday*365) * (maxAge - age)
    console.log("You will need " + total + " rice crackers until the ripe old age of " + maxAge + ".");
}
else
{
   window.prompt("Run code again");
}