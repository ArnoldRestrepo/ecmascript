// Before ECMAScript 6

function newFunction(name, age, country){
  var name = name || "Arnold";
  var age = age || 22;
  var country = country || "Colombia";
  console.log(name, age, country );
}

// After ECMAScript 6+

function newFunction2(name = "Arnold", age = 22, country = "Colombia"){
  console.log(name, age, country );
}

newFunction();
newFunction2();

