import people from "./data.js";

function calculateAverageAge(persons) {
  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  return totalAge / persons.length;
}

const averageAge = calculateAverageAge(people);

console.log(`L'âge moyen des personnes est : ${averageAge.toFixed(2)} ans`);
