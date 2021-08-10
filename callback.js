function makeUpperCase(value) {
  console.log(value.toUpperCase());
}

function reverseString(value) {
  console.log(value.split('').reverse().join(''));
}

// makeUpperCase('Clinton');

function handleName(name, cb) {
  const fullName = `${name} smith`;
  cb(fullName);
}
handleName('peter', makeUpperCase);
handleName('peter', reverseString);
