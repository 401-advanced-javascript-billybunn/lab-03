'use strict';

const fileReader = require('./lib/reader.js');

// Obtain and assert input
let files = process.argv.slice(2);


if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

// Task 1: Fix the broken code with nested callback functions
fileReader(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});

// Task 2: Use promises to read 3 files


// Task 3: Use async/await to read 3 files


