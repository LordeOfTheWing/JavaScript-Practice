console.log('__Getting started with promises__');

//making promises
const value = 2;
const promise = new Promise((resolve, reject) => {
  const randNum = Math.floor(Math.random * 3);
  if (randNum === value) {
    resolve('Hooray!! That was a correct guess');
  } else {
    reject('Oops!! Wrong Number');s
  }
});

console.log(promise);

//consuming promises using .then and .catch
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
