![CF](http://i.imgur.com/7v5ASc8.png) LAB 03
=================================================

#### Notes for grading:
* I completed all of **Part 1 - Read and Write to a File**. 
* I started **Part 2 - Reading Multiple Files**.
  * I only completed this up to **Task 1: Fix the broken code**.
  * I figured out Task 1 pretty quickly, but spent a lot of time trying to get the first test to pass (there was an issue with the mock included in the demo code).
* Still working on getting JSdocs up and running.

## LAB: Class 03

### Author: Billy Bunn

### Links and Resources
* [repo](https://github.com/401-advanced-javascript-billybunn/lab-03)
* [travis](https://www.travis-ci.com/401-advanced-javascript-billybunn/lab-03)

#### Documentation
* [jsdoc](http://xyz.com)

### Modules - Part 1
#### `edit-file.js`
##### Exported Values and Methods
Using the node CLI (see instruction below), reads, adds to, and reads a file again. Nested node filesystem (`fs.`) functions accomplish this and have the results logged to the console.

### Modules - Part 2
##### Exported Values and Methods
`reader.readAll([...files], callback) -> number`

Given an array of files and a callback error handler function, reads the file name and contents of each file.
The callback function takes `(err, data)`. If there is an error, the error handler will run.

### Setup
#### `.env` requirements
* `npm i` - install dependencies

#### Running the app (with the node CLI)
* `node edit-file files/test.txt` - Reads a file, appends a random word to that file, reads the file again
* `node index.js files/1.txt files/2.txt files/3.txt` - Reads the file names and contents of 3 files

#### Tests
* `npm test` to run tests
* **Assertions**: _to do_
* **Assertions to be made**: _to do_

#### UML
_UML image goes here_
