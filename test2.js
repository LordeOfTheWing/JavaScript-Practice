const os = require('os');
const { writeFile, readFile } = require('fs');

const compData = os.hostname();
// console.log(compData);

writeFile('./compData.txt', compData, (err) => {
  if (err) {
    console.log('Error Writing the CPU info');
    return;
  }
  console.log('File Written Successfully');
});

const datas = readFile('./compData.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('Failed to read the incoming data');
    return;
  }
  console.log('Task Excecuted Successfully');
  console.log(data);
});
