//Reversing a string for example reverseString('hello') === 'olleh'

//Method 1
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello World!'));

//Method 2

function reverseString2(str) {
  let revstring = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revstring = revstring + str[i];
  }
  return revstring;
}
console.log(reverseString2('Hello World!'));

//Method3

function reverseString3(str) {
  let revstring = '';
  for (let char of str) {
    revstring = char + revstring;
  }
  return reversestring;
}
console.log(reverseString('Hello World!'));

//Method4

function reverseString4(str) {
  let revstring = '';
  str.split('').forEach((char) => {
    revstring = char + revstring;
  });
  return revstring;
}
console.log(reverseString4('Hello World!'));

//Method 5
function reverseString5(str) {
  return str.split('').reduce((revstring, char) => char + revstring, '');
}
console.log(reverseString5('Hello World!'));
