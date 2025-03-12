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
```company:string``` এর পরিবর্তে ```company: "CodeVexa"``` লিখা যেতে পারে।
