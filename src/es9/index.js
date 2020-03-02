/**
 * ECMASCRIPT 9 - Junio 2018
 */

 /**
  * Spread Operator
  */

const obj = {
  name: "Arnold",
  age: 22,
  country: "COL"
}

let {name, ...all} = obj;

console.log(name, all);

const obj = {
  name: "Arnold Restrepo",
  age: 22
}

const obj1 = {
  ...obj,
  country: "COL"
}

console.log(obj1);


/**
 * Promise.finally
 */

const helloWorld = () => {
  return new Promise((resolve, reject)=> {
    (true)
      ? setTimeout(()=> resolve("Hello World"), 3000)
      : reject(new Error("Test Error"))
  })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(()=>console.log("Promesa Terminada"))

/**
 * Exec Regex
 */
  
const RegexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

const match = RegexData.exec("2018-02-14");

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);


