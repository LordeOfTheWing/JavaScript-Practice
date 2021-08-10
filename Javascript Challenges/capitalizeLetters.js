//Method 1
function capitalizeLetters(str) {
  const strArray = str.toLowerCase().split(' ');

  for (let i = 0; i < strArray.length; i++) {
    strArray[i] =
      strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
  }
  return strArray.join(' ');
}
console.log(capitalizeLetters('i am a javascript developer'));

//Method 2

function capitalizeLetters2(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
}
console.log(capitalizeLetters2('i am a javascript developer'));

//Method 3

function capitalizeLetters3(str) {
  return str.replace(/\b[a-z]/gi, (char) => {
    return char.toUpperCase();
  });
}
console.log(capitalizeLetters3('i am a javascript developer'));
