// CALLBACKS are a way to make sure certain code doesn’t execute until other 
// code has already finished execution.

// this is example of how callback functions work
function study(what, blah){
    // setTimeout(function(){
      console.log(`I'm studying ${what}! `);
    // }, 50);
    blah();
  }
  
  function enjoy(){
    console.log('After studying, I am enjoying!')
  }
  // make sure when invoking callback func NOT tu use ()
  //                                                  |
  //            ---------------------------------------
  //            |
  study('JS', enjoy);
  // enjoy();


// ******* ARRAYS *******

var theArray = ['Sandra', 'Paola', 'Will', 4, 67, true];
// get the 2nd elem
console.log(theArray[1]);

// get the size of the array
console.log(theArray.length);

// push -> add element in the end
theArray.push('blah');
console.log(theArray);

// unshift -> add element in the beginning
theArray.unshift('hello');
console.log(theArray);

// concat doesn't mutate original array
var newArr = theArray.concat('pizza');
console.log('after concat: ', theArray);
console.log(newArr);

// - -- -- - - DELETING ARRAY ELEM - - - -- 
console.log(theArray);

theArray.pop();
theArray.shift();
theArray.splice(2,3);

console.log(theArray);

//  - - - - - - ITERATING OVER ARRAYS  - - - - 

var theArray = ['Sandra', 'Paola', 'Will', 4, 67, true];
// using "for" loop
for(var i=0; i < theArray.length; i++){
  console.log(theArray[i]);
}

// using "forEach" 
theArray.forEach(function(elem, index){
  console.log(`Element on position ${index} is ${elem}`);
})

// THIS IS THE SAME AS ABOVE JUST USING ES6
theArray.forEach((theThing, whereIsIt) => {
  console.log(`Element on position ${whereIsIt} is ${theThing}`);
});

// CREATE FUNCTION THAT ADDS LAST NAME TO ELEM "PAOLA" IF THAT ELEM EXISTS

function mutate(arr){
  arr.forEach((el, ind) => {
    if(el === 'Paola'){
      arr[ind] = el += ' Hello';
    }
  })
    return arr; 
}

mutate(theArray);




