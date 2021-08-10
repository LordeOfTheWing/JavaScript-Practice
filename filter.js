const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];

//filter method
const youngPeople = people.filter((person) => {
  return person.age < 30;
});

//find method
const susy = people.find((person) => {
  return person.name === 'susy';
});
console.log(susy);

console.log(youngPeople);


