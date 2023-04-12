let first = 15;
let second = 7;

let temp;
//first method

// temp = first; // 15
// first = second; // 7
// second = temp;

// second method
// temp = first + second;

// first = temp - first;
// second = temp - second;

// third method (destructing)

[first, second] = [second, first];

// first = second;
console.log("first", first);
console.log("second", second);
