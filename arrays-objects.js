const student = {
  firstName: "Paola",
  lastName: "Sanchez",
  bootcamp: "Web Dev"  
}

// console.log("before: ", student);

console.log(student.firstName);
// we will not use this but it exists!
console.log(student["bootcamp"]);

// we use dot notation to ADD property to an object and we use "=" to give it corresponding value
student.year = 2018;

console.log("after 1: ", student);

// DELETE object property
delete student.bootcamp;

console.log("after 2: ", student);

const objKeys = Object.keys(student);

console.log("objKeys => ", objKeys);

console.log("firstName" in student);

student.year = 2019;

console.log("upd year: ", student.year);

//  = == = == = = ARRAYS AND OBJECTS = = == = = 

const student = {
    firstName: "Paola",
    lastName: "Sanchez",
    bootcamp: "Web Dev"  
  }
  
  // ****** array of objects *******

  const students = [
    {
      firstName: "Paola",
      lastName: "Sanchez",
      bootcamp: "Web Dev"  
    },
    {
      firstName: "Nick",
      lastName: "Hello",
      bootcamp: "Web Dev"  
    },
    {
      firstName: "Ana",
      lastName: "Blah",
      bootcamp: "UX"  
    }
  ]
  
  console.log(students[1].firstName);
  
  // ********** array of arrays ***********

  const developers = [
    ["Ana", "Will", "Camilo"],
    ["Sandra", "Miller", "Chris"],
    ["Bjorn", "Francisco", "Robert"]
  ]
  
  
  console.log(developers[1][0]);


//   ******* EXERCISE *******

// Add a student with name of Lucille D. Lozano to Fake School 2, in the first classroom.

var schoolSystem = {
    schools: [
      {
        name: "Fake School 1",
        classRooms: [
          {
            teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
            students: [
                { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
                { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
                { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
                { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
                { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
              ]
          },
          {
            teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
            students: [
              { firstName: 'Manley', lastName: 'Doyle', age: 18 },
              { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
              { firstName: 'Sid', lastName: 'Rohan', age: 30 },
              { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
              { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
            ]
          }
        ]
       },
       {
        name: "Fake School 2",
        classRooms: [
          {
            teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
            students: [
              { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
              { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
              { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
              { firstName: 'Rickie', lastName: 'White', age: 22 },
              { firstName: 'Rose', lastName: 'Collins', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
            students: [
              { firstName: 'Melany', lastName: 'Welch', age: 25 },
              { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
              { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
              { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
              { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
             ]
           }
         ]
       },
       {
        name: "Fake School 3",
        classRooms: [
          {
            teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
            students: [
              { firstName: 'Christop', lastName: 'Hahn', age: 26 },
              { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
              { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
              { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
              { firstName: 'Maudie', lastName: 'Haley', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
            students: [
              { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
              { firstName: 'Lois', lastName: 'Kulas', age: 28 },
              { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
              { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
              { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
            ]
          }
        ]
      }
    ]
  };
  
   
  schoolSystem.schools[1].classRooms[0].students.push({firstName: "Lucille", lastName: "Lozano", age: 22})
  
  console.log("after we added the student: ", schoolSystem.schools[1].classRooms[0].students);
  
  
