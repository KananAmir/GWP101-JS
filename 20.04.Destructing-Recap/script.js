let obj = {
  userName: "Leyla",
  email: "leyla@mail.ru",
  universty: "GDU",
  adress: {
    city: "Ganja",
    street: "S.Ismayl",
  },
  skills: ["drawing", "play piano"],
  getAdress: function () {
    return this.adress.street + ", " + this.adress.city;
  },
};
// // let username=obj.userName
// // let skills=obj.skills
// let { userName: istifadechi, skills } = obj;
// console.log(obj.getAdress());
// console.log(istifadechi,skills);

// let arr=[1,2,3,4,45]

// let [bir,iki,,dord,]=arr
// console.log(bir);
// console.log(dord);
// console.log();

let {
  adress: { city, street },
  skills: [d, p],
} = obj;

console.log(city);
console.log(street);
console.log(d);

let object = {
  a: "Hi",
  b: 20,
};

let a = "baku";
let b = "a";

console.log(object[a]); // object.b
console.log(object[b]); // object.a
