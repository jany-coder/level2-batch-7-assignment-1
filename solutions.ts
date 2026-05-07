// Problem 1: Filter even numbers from an array.
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((value) => value % 2 === 0);
};

// Problem 2: Reverse the given string.
const reverseString = (text: string): string => {
  return text.split('').reverse().join('');
};

// Problem 3: Define a union type and check if the input is a string or number.
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): 'String' | 'Number' => {
  return typeof value === 'string' ? 'String' : 'Number';
};

// Problem 4: Return a value from an object using a generic key.
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

// Problem 5: Book interface with title, author, and published year.
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return {
    ...book,
    isRead: true,
  };
};

// Problem 6: Create Person and Student classes with grade details.
class Person {
  constructor(public name: string, public age: number) {}
}

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7: Return the intersection of two number arrays.
const getIntersection = (array1: number[], array2: number[]): number[] => {
  const set2 = new Set(array2);
  return array1.filter((value) => set2.has(value));
};
