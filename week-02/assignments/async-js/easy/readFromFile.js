const fs = require('fs')

fs.readFile('examples.txt', 'utf-8', (err, data) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('Error: File not found!');
    } else {
      console.error('Error reading file:', err);
    }
    return;
  }
  console.log('File contents:', data);
});

// Expensive operation: A simple, large computational task
const expensiveOperation = () => {
  let sum = 0;
  for (let i = 0; i < 1e8; i++) { 
    sum += i;
  }
  
  console.log('Expensive operation done');
};

setTimeout(() => {console.log("waiting for expensive operation!"); expensiveOperation()}, 3000)