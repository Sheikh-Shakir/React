//Primitives
let age: number;

age = 12;
// age = "12"; //Error

let userName: string;
userName = "Shakir";
// userName=10; //Error

let isInstructor: boolean;
isInstructor = true;
isInstructor = false;
// isInstructor = "true"; //Error

// /Arrays and object
let hobbies: string[];
let hobbies1: any[];
hobbies = ["sports", "cooking"];
type Person = { name: string; age: number };

let person: Person;
person = { name: "Shakir", age: 30 };

// /Type inference
let course = "React - The Complete Guide";
// course=1234 //Error

// Union types
let course1: string | number = "React - The Complete Guide";
course1 = 1234;

// funcitons and types
function sum(a: number, b: number) {
  return a + b;
}

// Generics
function insertAtBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBegining(demoArray, -1); //[-1,1,2,3]
// updatedArray[0].split(""  );
