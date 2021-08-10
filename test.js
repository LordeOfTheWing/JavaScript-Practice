const people = [
  {
    Name: 'Clinton Mainya',
    Age: 22,
    Gender: 'Male',
    TechStack: 'JavaScript',
  },
  {
    Name: 'John Doe',
    Age: 32,
    Gender: 'Male',
    TechStack: 'JavaScript, TypeScript',
  },
  {
    Name: 'Jane Doe',
    Age: 56,
    Gender: 'Female',
    TechStack: 'HTML',
  },
];

const totalAges = people.map((person) => {
  return person.Age * 2;
});

const cart = [
  {
    title: 'Samsung Galaxy S7',
    price: 599.99,
    amount: 1,
  },
  {
    title: 'Google Pixel',
    price: 499.99,
    amount: 2,
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    amount: 4,
  },
  {
    title: 'Xiaomi Redmi Note 5',
    price: 399.99,
    amount: 3,
  },
];

let { totalItems, costOfItems } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;

    total.costOfItems += amount * price;
    total.totalItems += amount;
    return total;
  },
  {
    costOfItems: 0,
    totalItems: 0,
  }
);
costOfItems = parseFloat(costOfItems.toFixed(2));
console.log(totalItems, costOfItems);
