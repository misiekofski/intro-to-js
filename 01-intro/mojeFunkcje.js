function printUserDetails(firstName, lastName, age) {
  console.log(firstName + " " + lastName + ", lat: " + age);
}

function returnUserDetails(firstName, lastName, age) {
  return `${firstName} ${lastName}, lat: ${age}`;
}

users = []

// printUserDetails("Michał", "Dobrzycki", 25);
let user1 = returnUserDetails("Michał", "Dobrzycki", 35);
let user2 = returnUserDetails("Jan", "Kowalski", 25);
let user3 = returnUserDetails("Genowefa", "Nowak", 45);

users.push(user1, user2, user3);

console.log(users);
