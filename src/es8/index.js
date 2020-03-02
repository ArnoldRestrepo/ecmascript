/**
 * ECMASCRIPT 8
 */

/**
 * Object.entries
 */

const data = {
  frontend: "Arnold",
  backend: "Jhonny",
  design: "Ana"
}

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

const data = {
  frontend: "Arnold",
  backend: "Jhonny",
  design: "Ana"
}


const entries = Object.values(data);
console.log(entries);
console.log(entries.length);


/**
 * Padding
 */

 const string = "Hello";

 console.log(string.padStart(7, "Hi "));
 console.log(string.padEnd(10, " -----"));
 

/**
 * Trailing Commas
 */

 const obj = {
   name: "Oscar",
 }
