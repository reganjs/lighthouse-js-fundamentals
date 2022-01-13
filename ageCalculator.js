function ageCalculator (name, yearOfBirth, currentYear) {
  let years = currentYear - yearOfBirth;
    return `${name} is ${years} years old.`;
}

console.log(ageCalculator("Miranda", 1983, 2016));
console.log(ageCalculator("Ferdinand", 1968, 2014));