// Get the age
const getAge = ({birthYear, deathYear}) =>  deathYear - birthYear;

// Create arrow function
const findTheOldest = function(people) {

  // Assign accumAge to array index 0 of the arrayPeople list
  let accumAge = getAge(people[0]);
  return people.reduce((accum,curr) => {
    let currAge = getAge(curr)
    if (currAge > accumAge) {
      accumAge = currAge;
      return curr;
    }
    return accum
  })
}


const arrayPeople = [
  {
    birthYear: 1961,
    deathYear: 2005
  },
  {
    birthYear: 1955,
    deathYear: 2025 
  },
  {

    birthYear: 1923,
    deathYear: 1999
  },
] 

console.log(findTheOldest(arrayPeople))



