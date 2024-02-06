"use strict";

function fruitJuice(apple, organge, bannana) {
  const juice = `has ${apple} apples, ${organge} oranges, and ${bannana} bannanas.`;
  return juice;
}

const juiceMix1 = fruitJuice(2, 3, 4);
console.log(`Juice Mix 1: ${juiceMix1}`);

const juiceMix2 = fruitJuice(4, 3, 2);
console.log(`Juice Mix 2: ${juiceMix2}`);

const juicePlainOrange = fruitJuice(0, 5, 0);
console.log(`Plain orange juice has: ${juicePlainOrange}`);

const juicePlainApple = fruitJuice(5, 0, 0);
console.log(`Plain apple juice has: ${juicePlainApple}`);

// Calculating ages

const currentYear = 2023;

const calcAge1 = function (birthYear) {
  return currentYear - birthYear;
};

const firstAdultAge = calcAge1(1983);
const secondAdultAge = calcAge1(1987);
const firstChildAge = calcAge1(2020);

console.log(
  `The ages of the family are; ${firstAdultAge}, ${secondAdultAge}, and ${firstChildAge}`
);

const calcAge2 = (birthYear) => currentYear - birthYear;
const newAdult1 = calcAge2(1978);
console.log(
  `There is someone new that lives with the family and they are ${newAdult1} years old.`
);

let pet1 = {
  animal: "dog",
  breed: "lab",
  colour: "chocolate",
  name: "Buster",
  animalYoung: "puppy",
};

const petOwnershipLength = (boughtPet) => currentYear - boughtPet;
const pet1Age = petOwnershipLength(2018);
console.log(
  `We have a ${pet1.animal} named ${pet1.name}. They are a ${pet1.colour} ${pet1.breed} and we bought them as a ${pet1.animalYoung} ${pet1Age} years ago.`
);

// for loop practice

// Something getting bigger / increasing

for (let something = 1; something <= 10; something++) {
  console.log(`Something is getting bigger and is now ${something}!`);
}

// Something getting smaller / decreasing

for (let beerTotal = 24; beerTotal >= 0; beerTotal--) {
  console.log(`The number of beers left in the create is ${beerTotal}!`);

  if (beerTotal === 0) {
    console.log("Time to get some more beer!");
  }
}

// Random user address details

const userDetails = {
  firstName: "dave",
  lastName: "smith",
  userName: "daveysmith",
  password: "Smithy100",
  dateOfBirth: "30 Jun 1989",
  userType: "Client",
  contactAddress: "100 This Street, That Town, Random Country",
  contactNumber: "0800000000",
};
console.log(`A new user has been created: ${userDetails.userName}.`);
console.log(
  `If ${userDetails.userName} forgets their login details, their password is ${userDetails.password}. Do not share this with anyone other than ${userDetails.firstName} ${userDetails.lastName}.`
);
