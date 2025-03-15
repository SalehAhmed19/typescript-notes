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
