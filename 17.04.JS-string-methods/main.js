// length
// charAt
// uppercase/lovercase
// indexOf
// lastIndexOf
// startsWith
// endsWith

// trim
// substr
// substring
// padStart/padEnd
// includes
// slice
// split
// replace
// replaceAll
// concat
// match

let str = "Lorem Ipsum Dolor";

console.log(str.length);
console.log(str.charAt(2));
console.log(str.charCodeAt(6));

console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());

// console.log(str.indexOf("m"));
console.log(str.indexOf("m", 5));
console.log(str.lastIndexOf("m"));

console.log(str.startsWith("Lorem")); // true
console.log(str.startsWith("lorem")); // true

console.log(str.endsWith("or")); // true
console.log(str.endsWith("nor")); // true

console.log("     salam    ".trimStart());
console.log("     salam    ".trimEnd());
console.log("     salam".trim());
console.log("     salam");

console.log(str.substring(3));
console.log(str.substring(3, 7));

console.log(str.slice(3));
console.log(str.slice(3, 7));
console.log(str.slice(-5, -2));

console.log("includes", str.includes("resadam"));

console.log("1234 1234 1234 1234".slice(-4).padStart(16, "*"));
console.log("1234 1234 1234 1234".slice(0, 4).padEnd(16, "*"));

console.log(str.padEnd(35, "#"));

console.log("salam".concat(" aleykum"));

let str2 = "Lorem Ipsum Dolor Ipsum salam Ipsum";

console.log(str2.replace("Ipsum", "GDU"));
console.log(str2.replaceAll("Ipsum", "GDU"));

let numStr = "123 fbc 17E";

console.log(numStr.match(/[A-D]/gi));

let str3 = "Lorem23 Ipsum213 Dol34or Ip434sum salam Ipsum";

console.log(str3.replace(/[1-9]/gi, ""));
