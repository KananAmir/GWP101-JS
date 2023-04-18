const people = [
  { name: "Zach", surname: "Emergency", age: 1 },
  { name: "Nancy", surname: "Nurse", age: 1 },
  { name: "Ethel", surname: "Emergency", age: 1 },
  { name: "Nina", surname: "Nurse", age: 42 },
  { name: "Anthony", surname: "Emergency", age: 42 },
  { name: "Nina", surname: "Nurse", age: 32 },
  { name: "Ed", surname: "Emergency", age: 28 },
  { name: "Peter", surname: "Physician", age: 58 },
  { name: "Al", surname: "Emergency", age: 58 },
  { name: "Ruth", surname: "Registration", age: 62 },
  { name: "Ed", surname: "Emergency", age: 38 },
  { name: "Tammy", surname: "Triage", age: 29 },
  { name: "Alan", surname: "Emergency", age: 60 },
  { name: "Nina", surname: "Nurse", age: 58 },
];

// console.log(people.sort((a, b) => (a.name > b.name ? 1 : -1)));
console.log(people.sort((a, b) => a.name.localeCompare(b.name)));
