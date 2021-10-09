// Arrays
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
 "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4]);
console.log(months[10]);

console.log(months.sort());

months.unshift("start");
months.push("end");
console.log(months);

months.shift();
months.pop();
console.log(months);

console.log(months.reverse());

console.log(months.join("-"));

months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
 "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months.slice(4,11));
