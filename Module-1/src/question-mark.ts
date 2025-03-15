// Ternary operator
const age: number = 22;

// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Child");
// }

const isAdult = age >= 18 ? "Adult" : "Child";
console.log(isAdult);

// Nullish Coalescing Operator
const isAuthenticatedUser = null;
const userName = isAuthenticatedUser ?? "Guest";

console.log(userName);

type Human = {
  name: string;
  age: number;
  address: {
    city: "Bursa";
    home?: "Saray";
    country: "Turkey";
  };
};

const human1: Human = {
  name: "John",
  age: 25,
  address: {
    city: "Bursa",
    country: "Turkey",
  },
};

const home = human1.address?.home ?? "No home"; // default "No home"

console.log({ home });
