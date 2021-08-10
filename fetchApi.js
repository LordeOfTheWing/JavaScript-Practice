const url = 'https://randomuser.me/api/';

// console.log(fetch(url));

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const getRandom = async () => {
  try {
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    console.log(data.results[0]);
  } catch (err) {
    console.log(err);
  }
};

getRandom();
