function forEach(callback, theArray) {
  /*
  This is a little hint to get you started ;)
  
  for (... theArray.length ...) {
    ...
    callback(...)
    ...
  }
  */
  for(var i=0; i <theArray.length; i++){
    callback(theArray[i])
  }
  
}

function map(mappingFunction, theArray) {
  var array =[];
  for(var i =0; i <theArray.length; i++){
    array.push(mappingFunction(theArray[i]))
  }
return array;
}

function filter(predicate, theArray) {
  var filteredArray = [];
  for (var i = 0; i < theArray.length; i++) {
    if (predicate(theArray[i])) {
      filteredArray.push(theArray[i])
    }

  }
      return filteredArray;

}

function every(predicate, theArray) {
  var test=true;
  for(var i =0; i <theArray.length; i++){
    if(predicate(theArray[i])===false){
      test = false
      return false;
    }
  
  }
  if(test){
    return true;
  }

}

function some(predicate, theArray) {
  for (var i = 0; i < theArray.length; i++) {
    if (predicate(theArray[i])) {
      return true
    }

  }
  return false
}
function indexOf(item, theArray) {
  for (var i=0; i < theArray.length; i++) {
    if (item === theArray[i]) {
       return i;
    }

  }
  return -1;
}

function findIndex(predicate, theArray) {
  
  for(var i =0; i <theArray.length; i++){
    if(predicate(theArray[i])){
      return i
    }
    
  }
  return -1

}

function first(n, theArray) {
  var emptyArray = [];
  if (Array.isArray(n)) {
    return n[0]
  }
  if (n < 0) {
    return emptyArray;
  }
  if (n > theArray.length) {
    return theArray;
  }
  else {
    for (var i = 0; i < n; i++) {
      emptyArray.push(theArray[i]);
    }
    return emptyArray;
  }

}

function last(n, theArray) {
  var emptyArray = [];
  if (Array.isArray(n)) {
    return n[n.length-1]
  }
   if (n < 0) {
    return emptyArray;
  }
  if (n > theArray.length) {
    return theArray;
  }
  if(n ===1){
    
    return [theArray[theArray.length-1]];
  }
  else {
    for (var i = theArray.length-1; i >=n; i--) {
      emptyArray.unshift(theArray[i]);
    }
    return emptyArray;
  }
  
  

}

function pluck(property, arrayOfObjects) {
  var emptyArray = [];
  for(var i =0; i <arrayOfObjects.length; i++){
    emptyArray.push(arrayOfObjects[i][property])
 }
  return emptyArray;
}

function flatten(theArray) {
  var tempArray = [];
  for (var i = 0; i < theArray.length; i++) {
    if (Array.isArray(theArray[i])) {
      tempArray = tempArray.concat(flatten(theArray[i]));
    }
    else {
      tempArray.push(theArray[i]);
    }
  }
  return tempArray;
  }

function negate1(predicate) {
  return function(x){
    return !predicate(x)
  }
}

function negate2(predicate) {
  return function(a,b){
    return !predicate(a,b)
  }

}

function compose1(fun1, fun2) {
 return function(x) {
    return fun1(fun2(x))
  }
}

function compose2(arrOfFuncs) {
 return function(arg) {
    var temp = arg;
    for (var i = arrOfFuncs.length-1, l = 0; i >= l; i--) {
      temp = arrOfFuncs[i](temp);
    }
    return temp;
  }
}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
