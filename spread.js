const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const guys = [...boys,...girls]
console.log(guys)

const newFriends = [...guys]
newFriends[0] = 'clinton'
console.log(newFriends)


const bestFriend = 'arnold';
