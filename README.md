# Typescript

**Installation:**  
`npm install -g typescript`

**Typescript to equivalent JS:**  
`tsc filename.ts`

**Typescript config:**  
`tsc --init`

**`ts-node-dev` installation:**  
`npm i ts-node-dev` [ডিরেক্ট টাইপ্সক্রিপ্ট ফাইলকে নোড এ রান করতে পারে। Without equivalent JS conversion]

`ts-node-dev --respawn --transpile-only filename.ts`  
এই কমান্ড `package.json` এ `script` এ `start` এর ভ্যালু হিসেবে বসাতে হবে।

আলাদা ফোল্ডার অরে JS ও TS ফাইল রাখতে চাইলে:  
`Typescript` -এর জন্য `tsconfig.json` এ `rootDir` কে আনকমেন্ট করে `path` বসাথে হবে।  
`Javascript` -এর জন্য `tsconfig.json` এ `outDir` কে আনকমেন্ট করে `path` বসাথে হবে।

## Primitive Types

- string
- number
- boolean
- null
- undefined

`Typescript` এ স্পেসিফিকভাবে টাইপ ডিক্লার করে দেয়া হলে তাকে `Explicite type` বলে।  
টাইপ ডিক্লার করে দেয়া হলে সেই ভেরিয়েবলে অন্য কোনো টাইপের ভ্যালু অ্যাসাইন করা যায় না।

`Typescript` এ যদি স্পেসিফিকভাবে টাইপ ডিক্লার করা না হয় তখন কম্পাইলার নিজে থেকে ভ্যালুর উপরে নির্ভর করে `default` ভাবে টাইপ ধরে নিলে তাকে `Implicit type` বলে।

`Typescript` এ ভ্যারিয়েবলকে `any type` রাখা উচিত না।

**For run the code after installing `ts-node-dev`:**  
`npx ts-node-dev filename(example: src/index.ts)`

**For auto restart use this command:** `--respawn`  
**Example:** `npx ts-node-dev --respawn filename(ex- src/index.ts)`

## Array & Tuples

**Array declaration syntax:**
`const names:string[] = ["Steve", "John"];`  
Array Type এর সাথে `[]` / স্কয়ার ব্র্যাকেট ব্যবহার করতে হয়।

**Tuple declaration syntax:**
`const user: [number, string] = [123, "Steve"];`
[টাপল চেঞ্জ করা যায় না।]  
Tuple এ ভ্যালু পেয়ার অবস্থায় থাকে, তাই টাইপ ও জোরায় declare করতে হয়।

- দুইটি ভ্যালু পেয়ার হিসেবে ব্যবহার করতে হলে আমরা `tuple` ব্যবহার করি।

## Object

**Syntax:**

```
const user: {
  name:string;
  age:number;
  isMarried:boolean
} = {
  name: "Steve",
  age: 28,
  isMarried: true
};
```

যদি কোনো `property` এর সাথে `?` `Question mark` (Example: `isMarried?:boolean`) থাকে তাহলে ওই `property` `optional` হয়ে যায়। অর্থাৎ ভ্যালু এসাইন না করলেও কোনো `error` আসে না।

যদি specific কোনো `value` বসাতে হয় তাহলে `type` declare করার সময় সরাসরি `type` এর পরিবর্তে `value` বসানো যায়।  
`company:string` এর পরিবর্তে `company: "CodeVexa"` লিখা যেতে পারে। এটা কে বলে `literal type`

**readonly:** এই `keyword` ব্যবহার করেও `object` এর কোনো `property` এর `value` কে unchangeable করা যায়।

## Function

**Normal function:**

```
function add (num1:number, num2:number} {
  return num1 + num2;
}
```

**Arrow function:**
`const add = (num1:number, num2:number): number => num1 + num2;`

কোনো `function` কে `object` এর মধ্যে `define` করলে তাকে `mathod` বলে।  
`method` এ `return` না করলে `retun type` কে `void` দিতে হবে।

### Default Parameter

```
function add(num1:number, num2:number = 10): number {
  return num1 + num2;
}
```

`default parameter` হিসেবে প্রথম `parameter` ব্যবহার করা যাবে না।

## Spread operator & Rest operator

```
const arr = [1, 2, 3];
const newArr = [8, 9, 0];
arr.push(...newArr);
```

**`Rest operator` আর `Spread operator` একই দেখতে কিন্তু এদের কাজ বিপরীত। `Spread operator` `element` গুলোকে আলাদা করে কিন্তু `Rest operator` `element` গুলোকে নিয়ে আলাদা `array` তৈরি করে।**

### Rest operator vs Spread operator

**Rest operator:**

- The rest operator is used to collect multiple elements into a single array or object.
- It is primarily used in function parameters to capture a variable number of arguments and in destructuring to gather the remaining properties.

**Spread operator:**

- The spread operator is used to expand elements of an array or object into individual elements.
- It is commonly used to create copies of arrays or objects, or to merge them.

## Array & Object destructuring

**Array:** `const [bestfriend] = friends;`  
এখানে `bestfriend` নামক `array` তে টাইপ বলে দেয়ার প্রয়োজন পরে না।

**Object:**

```
const myFriend = {
  fullname: "Usman",
  age: 24,
};

const { fullname } = myFriend;
```

এখানেও আমাদের আলাদা ভাবে টাইপ বলে দিতে হবে না।  
এই ক্ষেত্রে যদি `const {fullname:string} = myFriend;` দেই তাহলে `string` কে `type` হিসেবে না ধরে ভেরিয়েবলের পরিবর্তিত নাম হিসেবে ধরবে।

`destructuring` করার সময় কোনো ভাবেই `type` `declare` করা যাবে না।

## Type Alias

যদি আমরা কোনো `object`এর প্রোপার্টি কে অপশনাল করতে চাই তাহলে প্রোপার্টি এর নামের পর `?` কোয়েশ্চেন মার্ক দিতে হবে।

আমরা যদি একই ধরনের `object`-কে বার বার লিখতে যাই, সেক্ষেত্রে আমাদের বার বার `type` বলে দিতে হবে। এখানে আসে `Type Alias`-এর কাজ। এটি কিছুটা `custom type` ডিক্লার করার মতো।

**Syntax:** `type CustomTypeName = { properties: values };`

```
type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: CrushType = {
  name: "Karagul Sultan",
  age: 25,
  profession: "Software Engineer",
  address: "Istanbul, Turkey",
};

const crush2: CrushType = {
  name: "Surmegul Sultan",
  profession: "Next Level Developer",
  address: "Bursa, Turkey",
};
```

`Type Alias` শুধুমাত্র `object` এই কাজ করে এমন না। বরং এটি প্রায় সকল ক্ষেত্রেই কাজ করে। `Ex: string, array, boolean etc.`  
**Example:**

```
// for boolean value
type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;

// for string
type CourseNameType = string;

const courseName: CourseNameType = "Next Level 2";

// for function
type OperationType = (x: number, y: number) => number;

const calculate = (num1: number, num2: number, operation: OperationType) => {
  return operation(num1, num2);
};

calculate(10, 20, (x, y) => x + y);
```

## Union & Intersection Type

### Union type:

A `union type` in `TypeScript` allows a `variable`, `parameter`, or `return value` to have multiple possible types. It is represented using the `| (pipe)` operator.
`Union Type` একাধিক `type` এক্সেপ্ট করতে পারে অথবা এর মাধ্যমে, অর্থাৎ হয় `type 1` আর না হয় `type 2` দুইটার যে কোনো টা এক্সেপ্ট করবে।  
`Union Type` `or operation` মতো কাজ করে।  
**Example:**

```
type NoobDeveloper = {
  name: string;
};

type JuniorDeveloper = {
  name: string;
  expertise: string;
  experience: number;
};

const newDevelper: NoobDeveloper | JuniorDeveloper = {
  name: "Steve",
  expertise: "JavaScript",
  experience: 1,
};
```

### Intersection Type:

In `TypeScript`, an `intersection type` is a way to combine multiple types into one. It is represented using the `&` operator.  
`Intersection type` কিছু টা `and (&)` এর মতো, যেখানে দুই ধরনের `type`-কে কম্বাইন্ড করে একটি টাইপ তৈরি করবে।
**Example:**

```
// Intersection type
type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};
```

যখন `| or` দেয়া থাকবে তখন বুঝবো সেটা `union type` এবং যখন `& and` দেয়া থাকবে তখন বুঝবো সেটা `intersection type`.

### Enum:

`enum` এ `default` ভাবে `enum member`-এর মান গুলো ক্রমান্বয়ে `(0, 1, 2...)` এভাবে নির্ধারণ করে।  
**Example:**

```
// enum
enum Level {
  Junior,
  mid,
  Senior,
}
```

আমরা চাইলে এভাবে `enum members` দের `overwrite` করতে পারি।  
**Example:**

```
// enum
enum Level {
  Junior = "Junior",
  mid = "Mid",
  Senior = "Senior",
}
```

**Full Example:**

```
// enum
enum Level {
  Junior = "Junior",
  mid = "Mid",
  Senior = "Senior",
}

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
  level: Level;
};
```

### `enum` is <del>not recommendable</del> in `typescript`

## Nullable Type, Unknown Type, Never Type

### Nullable:

A `nullable type` in `TypeScript` is a `type` that allows a variable to hold `null` or `undefined` in addition to its main type.
By `default`, `TypeScript` does not allow `null` or `undefined` unless explicitly specified.

```
// Nullable type
const searchName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing to search :(");
  } else {
    console.log("searching...");
  }
};

searchName(null);
```

### Unknown Type

যদি কখনো এমন হয় যে আমি কোনো `value`-এর টাইপ জানি না, সেক্ষত্রে আমরা `unknown type` ব্যবহার করতে পারি। এক্ষেত্রে `value` যেকোনো `type`-এর হইতে পারে।  
**Example:**

```
// unknown type
const getMyCarSpeed = (speed: unknown) => {
  // kmw^-1 --> ms^1
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`Speed is ${convertedSpeed}`);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" "); // ['10', 'km/h'];
    const convertedSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(`Speed is ${convertedSpeed}`);
  }
};

getMyCarSpeed(10);
getMyCarSpeed("10 Kmh");
```

### Never Type

The never type in TypeScript represents a value that never occurs. It is used for functions that never return, unreachable code, and exhaustive type checking.  
যদি কোনো ফাংশন কখনই কোনো কিছু রিটার্ন না করে সেই ক্ষেত্রে আমরা `never type` ব্যবহার করতে পারি।  
**Example:**

```
// Never type
const throwError = (message: string): never => {
  throw new Error(message + " :(");
};

throwError("Error found");
```

**Error throw syntax:** `throw new Error("Error message");`

## Ternary Operator, Nullish Coalescing Operator

### Ternary Operator:

`Ternary operator` এর সাহঅ্যাে আমরা সহজে `if-else` statement এর কাজ করে ফেলতে পারি।  
**Example:**

```
// Ternary operator
const age: number = 22;

// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Child");
// }

const isAdult = age >= 18 ? "Adult" : "Child";
console.log(isAdult);
```

### Nullish Coalescing Operator (`??`):

`Nullish Coalescing Operator` এর কাজ হচ্ছে কোনো একটা `null` অথবা `undefined` এর উপর ভিত্তি করে একটা `value` set করা।  
**Example:**

```
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
```

আপাত দৃষ্টিতে `ternary operator` আর `nullish coalescing operator` এর কাজ একই রকম মনে হইলেও প্রকৃতপক্ষে ভিন্ন। `nullish coalescing operator` শুধুমাত্র `null` অথবা `undefined` এর উপরে কাজ করে।

---

# // End of Module 1 //

---

## Type Assertion

`Type assertion` is a way to tell the compiler that you know more about a value’s type than it does. It allows you to override TypeScript’s inferred type when you are confident about the actual type of a value.

**Syntax:** `variableName as type`

**Example:**

```
let emni: any;

emni = "Next level web development";

(emni as string).length;

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The converted result is ${value} gram`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return `The converted result is ${value} gram`;
  }
}

const resultToBeNumber = kgToGram(1000) as number;

type CustomErrorType = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomErrorType).message);
}
```

`Type assertion` -এর ক্ষেত্রে `type` `declare` করার সময় আমাদের সতর্কতা অবলম্বন করতে হবে, কারন যদি আমরা কোনো `string` `value` এর জন্য `type` `number` করে দেই তাহলে `typescript` `type assertion` এর কারনে সেটাকে `number` হিসেবে ধরে নিবে। তখন কাঙ্খিত `output` পাওয়া পসিবল হবে না।

## Interface

`interface` অনেকটা `type alias` এর মতোই একটা জিনিস। তবে `type alias` `primitive type` ডাটার ক্ষেত্রে ব্ব্যহার করা হয়। এবং `interface` `object type` ডাটার ক্ষেত্রে ব্যবহার করা হয়।

**Example:**

```
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

```

`interface` ব্যবহারের সুবিধা হইলো আমরা তাকে `extends` করতে পারি।

**For Function**

```
// interface
interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  role: string;
}

const user: IExtendedUser = {
  name: "John",
  age: 30,
  role: "admin",
};
```

`function` এর ক্ষেত্রে `type alias` কে ব্যবহার করা ভালো। `for clean code and better readablility`

```
// Using type alias
type addNumbersType = (num1: number, num2: number) => number;

const addNumbers: addNumbersType = (num1, num2) => num1 + num2;

interface IAddNumbers {
  (num1: number, num2: number): number;
}

const addingNumbers: IAddNumbers = (num1, num2) => num1 + num2;
```

**For Array** `interface IRollNumbers {[index: number]: number;}`

```
type rollNumbersType = number[];
const rollNumbers: rollNumbersType = [1, 3, 4]; // [index]

interface IRollNumbers {
  [index: number]: number;
}

const roll: IRollNumbers = [2, 5, 6];
```
