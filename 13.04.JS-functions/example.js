function findDigits(n) {
  //   let x = n % 10;
  //   let y = Math.floor(n / 10) % 10;
  //   let z = Math.floor(n / 100);

  let x = n % 10;
  let y = ((n % 100) - x) / 10;
  let z = (n - (n % 100)) / 100;
  console.log(z, y, x);
}

findDigits(945);

