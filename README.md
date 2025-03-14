# Typescript
**Installation:**   
```npm install -g typescript```  

**Typescript to equivalent JS:**  
```tsc filename.ts```  

**Typescript config:**  
```tsc --init```  

**```ts-node-dev``` installation:**  
```npm i ts-node-dev``` [ডিরেক্ট টাইপ্সক্রিপ্ট ফাইলকে নোড এ রান করতে পারে। Without equivalent JS conversion]  

```ts-node-dev --respawn --transpile-only filename.ts```  
এই কমান্ড ```package.json``` এ ```script``` এ ```start``` এর ভ্যালু হিসেবে বসাতে হবে।

আলাদা ফোল্ডার অরে JS ও TS ফাইল রাখতে চাইলে:  
```Typescript``` -এর জন্য ```tsconfig.json``` এ ```rootDir``` কে আনকমেন্ট করে ```path``` বসাথে হবে।  
```Javascript``` -এর জন্য ```tsconfig.json``` এ ```outDir``` কে আনকমেন্ট করে ```path``` বসাথে হবে।

## Primitive Types
- string
- number
- boolean
- null
- undefined

```Typescript``` এ স্পেসিফিকভাবে টাইপ ডিক্লার করে দেয়া হলে তাকে ```Explicite type``` বলে।  
টাইপ ডিক্লার করে দেয়া হলে সেই ভেরিয়েবলে অন্য কোনো টাইপের ভ্যালু অ্যাসাইন করা যায় না।  

```Typescript``` এ যদি স্পেসিফিকভাবে টাইপ ডিক্লার করা না হয় তখন কম্পাইলার নিজে থেকে ভ্যালুর উপরে নির্ভর করে ```default``` ভাবে টাইপ ধরে নিলে তাকে ```Implicit type``` বলে।  

```Typescript``` এ ভ্যারিয়েবলকে ```any type``` রাখা উচিত না।  

**For run the code after installing ```ts-node-dev```:**  
```npx ts-node-dev filename(example: src/index.ts)```  

**For auto restart use this command:** ```--respawn```  
**Example:** ```npx ts-node-dev --respawn filename(ex- src/index.ts)```  

## Array & Tuples
**Array declaration syntax:**
```const names:string[] = ["Steve", "John"];```  
Array Type এর সাথে ```[]``` / স্কয়ার ব্র্যাকেট ব্যবহার করতে হয়।  

**Tuple declaration syntax:** 
```const user: [number, string] = [123, "Steve"];```
[টাপল চেঞ্জ করা যায় না।]  
Tuple এ ভ্যালু পেয়ার অবস্থায় থাকে, তাই টাইপ ও জোরায় declare করতে হয়।  

- দুইটি ভ্যালু পেয়ার হিসেবে ব্যবহার করতে হলে আমরা ```tuple``` ব্যবহার করি।

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
যদি কোনো ```property``` এর সাথে ```?``` ```Question mark``` (Example: ```isMarried?:boolean```) থাকে তাহলে ওই ```property``` ```optional``` হয়ে যায়। অর্থাৎ ভ্যালু এসাইন না করলেও কোনো ```error``` আসে না।  

যদি specific কোনো ```value``` বসাতে হয় তাহলে ```type``` declare করার সময় সরাসরি ```type``` এর পরিবর্তে ```value``` বসানো যায়।  
```company:string``` এর পরিবর্তে ```company: "CodeVexa"``` লিখা যেতে পারে। এটা কে বলে ```literal type```  

**readonly:** এই ```keyword``` ব্যবহার করেও ```object``` এর কোনো ```property``` এর ```value``` কে unchangeable করা যায়।  

## Function
**Normal function:**
```
function add (num1:number, num2:number} {
  return num1 + num2;
}
```
**Arrow function:**
```const add = (num1:number, num2:number): number => num1 + num2;```  

কোনো ```function``` কে ```object``` এর মধ্যে ```define``` করলে তাকে ```mathod``` বলে।  
```method``` এ ```return``` না করলে ```retun type``` কে ```void``` দিতে হবে।

### Default Parameter
```
function add(num1:number, num2:number = 10): number {
  return num1 + num2;
}
```
```default parameter``` হিসেবে প্রথম ```parameter``` ব্যবহার করা যাবে না।

## Spread operator & Rest operator
```
const arr = [1, 2, 3];
const newArr = [8, 9, 0];
arr.push(...newArr);
```
**```Rest operator``` আর ```Spread operator``` একই দেখতে কিন্তু এদের কাজ বিপরীত। ```Spread operator``` ```element``` গুলোকে আলাদা করে কিন্তু ```Rest operator``` ```element``` গুলোকে নিয়ে আলাদা ```array``` তৈরি করে।**  

### Rest operator vs Spread operator
**Rest operator:**  
- The rest operator is used to collect multiple elements into a single array or object.
- It is primarily used in function parameters to capture a variable number of arguments and in destructuring to gather the remaining properties.  

**Spread operator:**
- The spread operator is used to expand elements of an array or object into individual elements.
- It is commonly used to create copies of arrays or objects, or to merge them.

## Array & Object destructuring
**Array:** ```const [bestfriend] = friends;```  
এখানে ```bestfriend``` নামক ```array``` তে টাইপ বলে দেয়ার প্রয়োজন পরে না।  

**Object:**
```
const myFriend = {
  fullname: "Usman",
  age: 24,
};

const { fullname } = myFriend;
```
এখানেও আমাদের আলাদা ভাবে টাইপ বলে দিতে হবে না।  
এই ক্ষেত্রে যদি ```const {fullname:string} = myFriend;``` দেই তাহলে ```string``` কে ```type``` হিসেবে না ধরে ভেরিয়েবলের পরিবর্তিত নাম হিসেবে ধরবে।  

```destructuring``` করার সময় কোনো ভাবেই ```type``` ```declare``` করা যাবে না।
## Type Alias
যদি আমরা কোনো ```object```এর প্রোপার্টি কে অপশনাল করতে চাই তাহলে প্রোপার্টি এর নামের পর ```?``` কোয়েশ্চেন মার্ক দিতে হবে।  

আমরা যদি একই ধরনের ```object```-কে বার বার লিখতে যাই, সেক্ষেত্রে আমাদের বার বার ```type``` বলে দিতে হবে। এখানে আসে ```Type Alias```-এর কাজ। এটি কিছুটা ```custom type``` ডিক্লার করার মতো।  

**Syntax:** ```type CustomTypeName = { properties: values };``` 
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
```Type Alias``` শুধুমাত্র ```object``` এই কাজ করে এমন না। বরং এটি প্রায় সকল ক্ষেত্রেই কাজ করে। ```Ex: string, array, boolean etc.```  
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
```Union Type``` একাধিক ```type``` এক্সেপ্ট করতে পারে অথবা এর মাধ্যমে, অর্থাৎ হয় ```type 1``` আর না হয় ```type 2``` দুইটার যে কোনো টা এক্সেপ্ট করবে।  
```Union Type``` ```or operation``` মতো কাজ করে।  
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
