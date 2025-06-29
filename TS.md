<h1 style="display: flex; align-items: center; justify-content: center; gap: 10px;">
  <img src="https://camo.githubusercontent.com/bb11234e86e6ef0b7bd2c91e1ae02eb637128756f87b13d024e902f6800bca98/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3331373843363f7374796c653d666c6174266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465" alt="TS Logo" width="200">
</h1>


## 🔹 Basic Types
```ts
let id: number = 5; // number type variable
let company: string = "OpenAI"; // string type variable
let isPublished: boolean = true; // boolean type variable
let x: any = "Hello"; // any type (can be any value)

let ids: number[] = [1, 2, 3]; // array of numbers
let arr: any[] = [1, true, "hello"]; // array of any type values

let pid: string | number = 22; // union type (string or number)
```

## 🔹 Tuples & Arrays of Tuples
```ts
let person: [number, string, boolean] = [1, "Mashfiq", true]; // tuple with fixed types and length
let employee: [number, string][] = [ // array of tuples
  [1, "Mash"],
  [2, "Rayhan"],
];
```

## 🔹 Enums
```ts
enum Direction {
  Up = 1, // enum member with value 1
  Down,   // auto-increments to 2
  Left,   // 3
  Right,  // 4
}
```

## 🔹 Objects and Type Aliases
```ts
type User = {
  id: number; // property with number type
  name: string; // property with string type
};

const user: User = {
  id: 1, // matching id type
  name: "Mashfiq", // matching name type
};
```
## 🔹 Type Assertion
```ts
let cid: any = 1; // any type
let customerId = cid as number; // type assertion (preferred)
let customerId2 = <number>cid; // type assertion (JSX-incompatible)
```

## 🔹 Functions
```ts
function add(x: number, y: number): number { // function with number parameters and return type
  return x + y;
}

function log(message: string | number): void { // void means no return value
  console.log(message);
}
```

## 🔹 Interfaces
```ts
interface UserInterface {
  readonly id: number; // read-only property
  name: string;
  age?: number; // optional property
}

const user1: UserInterface = {
  id: 1,
  name: "Ovi",
};

interface MathFunc {
  (x: number, y: number): number; // function signature
}

const add: MathFunc = (a, b) => a + b; // function assigned to interface
```

## 🔹 Classes
```ts
class Person {
  private id: number; // accessible only within class
  protected name: string; // accessible within class and subclasses

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register(): string { // method with string return
    return `${this.name} is registered`;
  }
}

const mash = new Person(1, "Mashfiq"); // create class instance
```

## 🔹 Class Inheritance
```ts
class Employee extends Person {
  position: string; // new property

  constructor(id: number, name: string, position: string) {
    super(id, name); // call parent constructor
    this.position = position;
  }
}
```

## 🔹 Class Implements Interface
```ts
interface PersonInterface {
  id: number;
  name: string;
  register(): string; // method signature
}

class Person2 implements PersonInterface { // class implements interface
  constructor(public id: number, public name: string) {}

  register() {
    return `${this.name} is registered`;
  }
}
```

## 🔹 Generics
```ts
function getArray<T>(items: T[]): T[] { // generic function
  return [...items];
}

const numArray = getArray<number>([1, 2, 3]); // number array
const strArray = getArray<string>(["a", "b", "c"]); // string array
```

## 🔹 Utility Types
```ts
type User = {
  id: number;
  name: string;
  email?: string;
};

type RequiredUser = Required<User>; // all properties required
type PartialUser = Partial<User>; // all properties optional
type ReadonlyUser = Readonly<User>; // all properties readonly
type PickUser = Pick<User, "id" | "name">; // only pick selected keys
type OmitUser = Omit<User, "email">; // omit selected keys
```

## 🔹 Type Narrowing
```ts
function printId(id: number | string) { // union type
  if (typeof id === "string") { // type narrowing using typeof
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
```

## 🔹 Type Guards
```ts
function isString(value: any): value is string { // custom type guard
  return typeof value === "string";
}
```

## 🔹 Advanced Types
```ts
type Point = { x: number; y: number }; // base type
type ThreeDPoint = Point & { z: number }; // intersection type
type StringOrNumber = string | number; // union type
```

## 🔹 Type Inference
```ts
let msg = "Hello"; // inferred as string
```

## 🔹 keyof / typeof / infer
```ts
type Person = { name: string; age: number };
type PersonKeys = keyof Person; // 'name' | 'age'

const obj = { x: 1, y: 2 };
type ObjType = typeof obj; // infer type from variable

type ReturnTypeExample<T> = T extends (...args: any[]) => infer R ? R : never; // infer return type
```

## 🔹 Modules
```ts
// math.ts
export function add(a: number, b: number): number { // export function
  return a + b;
}

// app.ts
import { add } from './math'; // import function
```

## 🔹 TSConfig Template
```ts
{
  "compilerOptions": {
    "target": "ES6", // JavaScript version
    "module": "commonjs", // module system
    "strict": true, // strict mode
    "esModuleInterop": true, // compatibility for commonjs
    "outDir": "./dist", // output directory
    "rootDir": "./src" // input directory
  }
}
```

## 🔹 Non-null Assertion
```ts
const el = document.getElementById("root")!; // non-null assertion
```

## 🔹 DOM Types
```ts
const input = document.querySelector("input") as HTMLInputElement; // cast to HTMLInputElement
input.value = "Mash"; // set input value
```
