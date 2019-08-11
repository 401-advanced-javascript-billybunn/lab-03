'use strict';

const fs = require('fs'); // built-in to node 
const util = require('util'); // built-in to node

const readFile = util.promisify(fs.readFile); // 


let contents = [];
/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files, callback) => {
  readAll([...files], callback);
  contents = [];
};

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */
const readOne = (file, callback) => {
  fs.readFile(file, (err, data) => {
    if (err) { callback(err); }
    else { callback(undefined, data); }
  });
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = (paths, callback) => {

  // One way:

  // let contents = [];

  // readFile(paths[0])
  //   .then(data => {
  //     contents.push(data.toString.trim());
  //     return readFile(paths[1]); // feeder to next then
  //   })
  //   .then(data => {
  //     contents.push(data.toString.trim());
  //     return readFile(paths[2]); // feeder to next then
  //   })
  //   .then(data => {
  //     contents.push(data.toString.trim());
  //     callback(undefined, contents);
  //   })
  //   .catch(error => callback(error));


  // Another way:

  let promises = [];
  paths.forEach(file => {
    promises.push(readFile(file)); // makes an array of promises
    // but now all those promises need to be resolved.
  });

  // resolves all promises, returns what they give back IN ORDER
  Promise.all(promises) 
    .then( data => {
      console.log(data);
      let content = data.map((val,idx) => val.toString().trim());
      callback(undefined, content);
    });
};
