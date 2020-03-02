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


/**
 * Async - Await
 */

const helloWorld = () => {
  return new Promise((resolve, reject)=>{
    (true)
      ? setTimeout(()=> resolve("Hello World!"), 3000)
      : reject(new Error("Test Error"))
  })
}

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

const helloWorld = () => {
  return new Promise((resolve, reject)=>{
    (true)
      ? setTimeout(()=> resolve("Hello World!"), 3000)
      : reject(new Error("Test Error"))
  })
}

const AnotherFunction = async() => {
  try{
    const hello = await helloWorld();
    console.log(hello);
  } catch(error){
    console.error(error);
  }
}

AnotherFunction();