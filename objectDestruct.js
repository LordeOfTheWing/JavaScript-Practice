const bob = {
  firstName: 'bob',
  age: 20,
  position: 'developer',
  siblings: {
    sister: 'Jane',
  },
};
const { firstName ,age } = bob;

function printPerson({ firstName }) {
  console.log(firstName);
}

printPerson(bob);
