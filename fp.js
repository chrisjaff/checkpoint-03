// Convert the following code to use `.map`

var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.forEach(person => {
  peoplesAges.push(person.age)
})
var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.forEach(person => {
  peoplesAges.push(person.age)
})
var peopleOrder = people.map(function(x){
return x.name + x.age;
});

// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.forEach(person => {
  if(person.age < 35){
    peopleYoungerThan35.push(person)
  }
})
function youngPeople (value,index,array){
  if (age > 35)
  return person;
}
console.log(people.filter(youngPeople));

// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

var peopleWhoseNamesHaveTheLetterS = people.filter(person => person.name.match("s"))
