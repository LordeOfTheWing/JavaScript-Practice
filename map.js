console.log('Map Method in Javascript');

const people = [
  { name: 'bob', age: 20, position: 'developer', salary: 100 },
  { name: 'peter', age: 25, position: 'designer', salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', salary: 400 },
  { name: 'anna', age: 35, position: 'intern', salary: 10 },
];

const newAges = people.map((person) => {
  return person.age * 2;
});
console.log(newAges);

const totalAges = newAges.reduce(
  (total, age) => {
    total.sumOfTotalAges += age;
    return total;
  },
  {
    sumOfTotalAges: 0,
  }
);

console.log(totalAges);

const sumOfSalaries = people.reduce(
  (total, person) => {
    const {salary} = person
    total.sumOfSalaries += salary;
    return total;
  },
  {
    sumOfSalaries: 0,
  }
);

console.log(sumOfSalaries);