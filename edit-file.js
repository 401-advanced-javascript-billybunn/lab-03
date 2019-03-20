'use strict';

let fs = require('fs');
let faker = require('faker');

let file = process.argv[2];

// First, read the file and log it
fs.readFile(file, (err, data) => {
  if (err) throw err;
  console.log('BEFORE:\n' + data.toString() + '\n');

  // Then, create a random value
  let randomValue = ', ' + faker.random.word(); //?

  // Add that value to the file
  fs.appendFile(file, randomValue, (err) => {
    if (err) throw err;
    console.log('APENDED with: ' + randomValue + '\n');

    // Read the file again and log it
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      console.log('AFTER:\n' + data.toString() + '\n');
    });

  });

});
