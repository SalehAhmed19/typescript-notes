// normal function
// default parameter
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 4, 5];

const newArr = arr.map((element: number) => element * element);

// define function in object
const person: {
  name: string;
  balance: number;
  getBalance(money: number): void;
} = {
  name: "John",
  balance: 5,
  getBalance(money: number) {
    console.log(`My new balance is ${money}`);
  },
};

// spread operator
const friends = ["Abdul Kadir", "Khalil", "Ahmed"];
const newFriends = ["Umar", "Usman", "Murad"];

friends.push(...newFriends);
// console.log(friends);

// console.log(friends);

// rest operator
const greetFriends = (fr1: string, fr2: string, fr3: string): void =>
  console.log(`Hi ${fr1}\nHi ${fr2}\nHi ${fr3}`);

// greetFriends("Usman", "Orhan", "Aladdin");

// rest operator
const greetings = (...friends: string[]): void => console.log(friends);

greetings("Aladdin", "Orhan", "Usman", "Khalil");

// array and object destructuring
const [bestfriend] = friends;

const myFriend = {
  fullname: "Usman",
  age: 24,
};

const { fullname } = myFriend;
