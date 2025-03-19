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
