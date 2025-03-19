// type alias
type User = {
  name: string;
  age: number;
};

// interface
interface IUser {
  name: string;
  age: number;
}

const userWithTypeAlias: User = {
  name: "Type Alias",
  age: 100,
};

const userWithInterface: IUser = {
  name: "Interface",
  age: 200,
};

interface IExtendedUser extends IUser {
  role: string;
}

const user: IExtendedUser = {
  name: "John",
  age: 30,
  role: "admin",
};

// Using type alias
type addNumbersType = (num1: number, num2: number) => number;

const addNumbers: addNumbersType = (num1, num2) => num1 + num2;

interface IAddNumbers {
  (num1: number, num2: number): number;
}

const addingNumbers: IAddNumbers = (num1, num2) => num1 + num2;

type rollNumbersType = number[];
const rollNumbers: rollNumbersType = [1, 3, 4]; // [index]

interface IRollNumbers {
  [index: number]: number;
}

const roll: IRollNumbers = [2, 5, 6];
