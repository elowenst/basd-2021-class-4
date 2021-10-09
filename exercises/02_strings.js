// Strings
var stringA = "become a software developer";
console.log(stringA.toUpperCase());

 var stringB = "California";
 var stringBsub = stringB.substring(0,5);
 console.log(stringBsub);

var stringC = "California";
var stringCsub = stringC.substring(7,10);
console.log(stringCsub);

var stringD = "that’s what She said";
var resultD = stringD.substring(0,1).toUpperCase() + stringD.substring(1,12)
 + stringD.substring(12,13).toLowerCase() + stringD.substring(13,20);
console.log(resultD);

var stringE = "That’s what She said";
var stringEindex = stringE.indexOf(" ", 0);
console.log(stringEindex);

var stringF = "apocalypsE mozzarellA";
var resultF = stringF.substring(0,1).toUpperCase() + stringF.substring(1,9)
+ stringF.substring(9,10).toLowerCase() + stringF.substring(10,11) + stringF.substring(11,12).toUpperCase() 
+ stringF.substring(12,20) + stringF.substring(20,21).toLowerCase();
console.log(resultF);
