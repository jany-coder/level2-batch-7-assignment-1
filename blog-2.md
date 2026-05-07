# How OOP Helps Manage Complexity in TypeScript

## Introduction
Object-oriented programming (OOP) makes it easier to organize code and manage behavior in large TypeScript projects. The four pillars of OOP are Inheritance, Polymorphism, Abstraction, and Encapsulation.

## Inheritance
Inheritance allows one class to reuse properties and methods from another.

```ts
class Person {
  constructor(public name: string, public age: number) {}
}

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }
}
```
This avoids repeating common features like name and age.

## Polymorphism
Polymorphism means different classes can share the same method name but behave differently.

```ts
class Student extends Person {
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
```
A `Student` can use its own `getDetails` method while still being treated as a `Person` in other parts of the program.

## Abstraction
Abstraction hides internal details and shows only what is necessary.

```ts
class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
```
Other code does not need to know how `getDetails` is built, only that it returns student information.

## Encapsulation
Encapsulation keeps data and behavior together in a class, protecting the internal state.

```ts
class Person {
  constructor(public name: string, public age: number) {}
}
```
This keeps `name` and `age` within the object and avoids spreading them across unrelated code.

## Conclusion
Using OOP in TypeScript helps keep code clean and easy to maintain. Inheritance reduces duplication, polymorphism enables flexible behavior, abstraction hides complexity, and encapsulation keeps related data together.
