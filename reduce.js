const people = [
  { name: 'bob', age: 20, position: 'developer', salary: 100 },
  { name: 'peter', age: 25, position: 'designer', salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', salary: 400 },
  { name: 'anna', age: 35, position: 'intern', salary: 10 },
];

const dailyTotal = people.reduce((acc, person) => {
  acc += person.salary;
  return acc;
}, 0);

const totalAges = people.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);
console.log(`The total ages is: ${totalAges}`);
console.log(`The total spent daily: KES ${dailyTotal}`);
