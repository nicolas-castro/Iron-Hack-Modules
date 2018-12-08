// ****** ****** ****** ****** 
// ****** MAP ****** ****** 
// ****** ****** ****** ****** 

const arr = [1, 4, 7, 22, 41];
arr.forEach(elem => {
    // .forEach() ignores "return":
  return  elem * 2;
})
// .map() => creates copy of the array
// ES6
const doubled = arr.map(elem => {
  return elem * 2
});

// ES5
var doubled = arr.map(function(elem){
    return elem * 2;
})


// console.log(arr); => [ 1, 4, 7, 22, 41 ] <== *** original array stays untouched ***

// console.log(doubled); => [ 2, 8, 14, 44, 82 ]



const students = [
  {name: "Sandra", camp: "Web Dev"},
  {name: "Ana", camp: "Web Dev"},
  {name: "Denise", camp: "UX"}
];
// console.log(students);

const studentList = students.map(oneStudent => {
  return oneStudent.name;
  });

// console.log(studentList);

// console.log(students)

var arrayOfCities = ['miami', 'barcelona', 'atlanta', 'amsterdam', 'moscow'];

const capsCities = arrayOfCities.map(elem => {
  return elem[0].toUpperCase() + elem.substr(1);
})

// console.log(capsCities);

// ****** ****** ****** ****** 
// ****** REDUCE ****** ****** 
// ****** ****** ****** ****** 
const array = [1, 4, 7, 22, 41, 3, 2];

// let sum = 0;
// array.forEach(num => {
//   sum += num
// })

// console.log(sum);

const total = array.reduce((base, element) => {
  return base + element
}, 0);

// console.log(total)

const products =[
  {name: "iPhone", price: 500},
  {name:"shoes", price: 60},
  {name: "sandwich", price: 10}
]

const final = products.map(oneProd => {
  return oneProd.price;
}).reduce((base, elem) => base + elem);


// console.log(final);


// ****** ****** ****** ****** 
// ****** FILTER ****** ****** 
// ****** ****** ****** ****** 

const people = [
  {name: "Ana", age: 21},
  {name: "Sandra", age: 33},
  {name: "Blah", age: 17}
]

const allowedInBars = people.filter(onePerson => {
  // console.log(onePerson.name)
  return onePerson.age >=21;
  }).map(person => person.age).reduce((base, el) => base + el)

  // in one line:
  // const allowedInBars = people.filter(onePerson => onePerson.age >=21);

// console.log(allowedInBars);

const someNumbers = [1, 60, 44, 123, 99];
// not devisible by 2
// < 100

// const theGoodOnes = someNumbers.filter(theNum => theNum % 2 === 1 && theNum < 100);

const theGoodOnes = someNumbers.filter(theNum => {
  return theNum % 2 === 1 && theNum < 100
}).reduce((base, el) => base + el);

// console.log(theGoodOnes);

// ****** ****** ****** ****** 
// ****** SORT ****** ****** 
// ****** ****** ****** ****** 

people.sort((num1, num2) => {
  if(num1.age < num2.age){
    return -1;
  } else if (num1.age > num2.age){
    return 1
  } else {
    return 0;
  }
});

// console.log(people);

const cities = ['Miami', 'Barcelona', 'Atlanta', 'minneapolis', 'amsterdam', 'moscow'];

// ES5
var sorted = cities.map(function(oneCity){
  return oneCity.toLowerCase();
}).sort().reverse();
// ES6
// const sorted = cities.map(oneCity => oneCity.toLowerCase()).sort().reverse()

// console.log(sorted);

cities.splice(3, 2, "Berlin");

console.log(cities);

