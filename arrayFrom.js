const udemy = 'udemy';
// const udemyNew = [...udemy]
// console.log(udemyNew)

// console.log(Array.from(udemy))

const items = Array.from({ length: 120 }, (_, index) => {
  return index;
});

const itemsPerPage = 10;
const pages = Math.ceil(items.length / itemsPerPage);

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);
  return tempItems;
});

console.log(newItems);
