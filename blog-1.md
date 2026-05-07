# How Generics Make TypeScript Reusable and Safe

## Introduction
Generics let TypeScript functions and classes work with many data types while keeping type safety. They help avoid repeating the same code for different object shapes or value types.

## Why Generics Matter
A generic is a placeholder for a type that is decided later. This means one function can work with strings, numbers, or objects without losing type checks.

### Example: Reusable Property Access
```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: 'John Doe', age: 21 };
const name = getProperty(user, 'name');
```
This single function works for any object. TypeScript ensures the key exists and returns the correct type.

### Benefits
- Reusable code: write once, use many times.
- Strong typing: the compiler checks the exact return type.
- Less duplication: no need for separate functions for strings, numbers, or objects.

## Real Example: Read Status Toggle
```ts
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book) {
  return {
    ...book,
    isRead: true,
  };
}
```
A generic version of this pattern would allow status toggling for many different object types, not just books.

## Conclusion
Generics make TypeScript code more flexible and maintainable. They let developers build reusable tools without losing the benefits of static types, which is especially helpful in large applications.
