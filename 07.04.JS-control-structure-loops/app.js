// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i < 50; i = i + 2) {
//   console.log(i);
// }

// for (let i = 0; i < 50; i++) {
//   if (i == 0) {
//     console.log(`${i} is not odd or even`);
//     if (i % 2 == 0) {
//       console.log(`${i} is even number`);
//     } else {
//       console.log(`${i} is odd number`);
//     }
//   } else {
//   }
// }
// for (let i = 0; i < 50; i++) {
//   if (i % 2 == 0) {
//     if (i == 0) {
//       console.log(`${i} is not even or odd`);
//     } else {
//       console.log(`${i} is even number`);
//     }
//   } else {
//     console.log(`${i} is odd number`);
//   }
// }

// let index = 5;
// for (; index < 10; index++) {
//   console.log(index);
// }

//infinite loop
let count = 0;

// for (;;) {
//   console.log(++count);

//   if (count == 999) {
//     break;
//   }
// }

//break vs continue

// for (let i = 0; i <= 10; i++) {
//     if (i == 5) break;
//     console.log(i);
// }

// for (let i = 0; i <= 20; i++) {
//   if (i == 6) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i == 6 || i == 7) {
//     continue;
//   }
//   console.log(i);
// }

//example
console.log("a x a = a^2 a^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}  ${i ** 3}`);
}

// while vs do while
// let index = 0;
// while (index <= 10) {
//   console.log(index);
//   index++;
// }

// let index = 0;
// console.log(index);
// while (index <= 100) {
//   if (index == 20) break;
//   index++;
// }

// let index = 0;
// while (index < 10) {
//   index++;
//   if (index == 6) {
//     continue;
//   }
//   console.log(index);
// }

//infinite loop

// while (true) {
//   console.log("Hello GWP101");
// }

let counter = 16;
do {
  console.log(counter);
  counter++;
} while (counter < 10);


let counter1 = 20;
while (counter1 < 10) {
  console.log(counter1);
  counter1++;
}
