/**
 * ECMASCRIPT 10 - Junio 2019
 */

/**
 * Arrat.flat()
 */

let array = [1,2,3, [1,2,3], [1,2,3]];

console.log(array.flat(2));

/**
 * Arrat.flatMap()
 */

let array = [1,2,3,4,5,6];

console.log(array.flatMap(value => [value,value * 2]));

/**
 * TrimStart
 */

let hello = "     Hello World";

console.log(hello);
console.log(hello.trimStart());


/**
 * TrimEnd
 */

let hello = "Hello World        --";

console.log(hello);
console.log(hello.trimEnd());


/**
 * Try Catch Error
 */

try{

} catch{
  error
}


/**
 * Transform Arrays in Objects - from Entries
 */


let entries = [["name", "Arnold"],["age", 22]];

console.log(Object.fromEntries(entries));


/**
 * Symbols
 */

let mySimbol = `My Symbol`;
let symbol = Symbol(mySimbol);
console.log(symbol.description);


