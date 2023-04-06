let number = 0;
// if (number === 6) {
//     console.log("this is 5");
// }

// if (number === 6) {
//   console.log("this is 5");
// } else {
//   console.log("this is not 5");
// }

//   if (number > 0) {
//     console.log("this is positive number");
//   } else {
//     console.log("this is negative");
//   }

if (number > 0) {
  console.log("this is positive number");
} else if (number < 0) {
  console.log("this is negative");
} else {
  console.log("this is zero");
}

let userAge = 15;
let userName = "Rashid";
let city = "Baku";

// if (userAge >= 16 && city == "Ganja") {
//   console.log(`Wellcome ${userName}, city: ${city}`);
// } else {
//   console.log(`Age is not relevant`);
// }

if (userAge >= 16) {
  if (city == "Ganja") {
    console.log("Wellcome to Ganja");
  } else {
    console.log("City is not Ganja");
  }
} else {
  console.log("Age is not okay");
}

// Switch Case

let weekDay = 21;

switch (weekDay) {
  case 0:
    //   case 15:
    //   case 20:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;

  default:
    console.log("Thre is no such week day");

    break;
}


//ternary operator

let num = 7;
// if (num > 5) {
//   console.log("num is greater than 5");
// } else {
//   console.log("num is less than 5");
// }

num >= 8
  ? console.log("num is greater or equal than 5")
  : console.log("num is less than 5");
