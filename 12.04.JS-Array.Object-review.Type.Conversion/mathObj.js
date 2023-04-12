let number = 44.5675;

//min , max, floor, ceil, trunc, round, sign, abs, random, sqrt, pow

console.log("floor", Math.floor(number));
console.log("ceil", Math.ceil(number));
console.log("round", Math.round(number));

console.log("max ", Math.max(23, 56, 33, 12, 657, 34));
console.log("min ", Math.min(23, 56, 33, 12, 657, 34));

console.log("sign ", Math.sign(22));
console.log("sign ", Math.sign(-22));
console.log("sign ", Math.sign(0));

console.log("abs ", Math.abs(-1230));

console.log("trunc ", Math.trunc(number));

console.log("pow ", Math.pow(4, 3));
console.log("sqrt ", Math.sqrt(64));

console.log(Math.floor(Math.random() * 5));

//generate random number between min/max
Math.floor(Math.random() * (max - min) + min);

Math.floor(Math.random() * 20 + 40);
// console.log("fixed", +number.toFixed(3));
