// let username: string = 'Mash';
// let age: number;

// console.log(typeof username);

// let userAge = 38;

// function add(a: number, b = 5) {
//   return a + b;
// }

// let age: any = 36;

// let hobbies = ['Sports', 'Cooking'];

// hobbies.push();

// let users: (string | number)[];

// let users: Array<string | number>;

// let possibleResults: [number, number]; //

// possibleResults = [1, -1];

// let user: {
//   name: string;
//   age: number | string;
//   hobbies: string[];
//   role: {
//     description: string;
//     id: number;
//   };
// } = {
//   name: 'Mash',
//   age: 31,
//   hobbies: ['Sports', 'Coding']
// };

// let val: {} = 'some text';

// let data: Record<string, number | string>;

// data = {
//   entry1: 1,
//   entry2: 'Some string'
// };

// enum Role {
//   Admin,
//   Editor,
//   Guest
// }

// let userRole: Role = 0;

// enum Direction {
//   up = 1,
//   down,
//   left,
//   right
// }

// let userRole: 'admin' | 'editor' | 'guest' = 'admin';
// userRole = 'guest';

// let res: [1, | -1, 1 | -1];
// res = [1, -1, 1];

// type Role = 'admin' | 'editor' | 'guest' | 'reader';
// let userRole: Role;

// type User = {
//   name: string;
//   age: number;
//   role: Role;

// }

// function add(a: number, b: number): number {
//   return a + b;
// }

// function log(msg: string): void {
//   console.log(msg);
// }

// function logAndThrow(err: string): never {
//   console.log(err);
//   throw new Error(err);
// }

// const logMsg = (msg: string) => {
//   console.log(msg);
// };

// function performJob(cb: (msg: string) => void) {
//   //...
//   cb('Job Done');
// }

// performJob(logMsg);

// type User = {
//   name: string,
//   age: number,
//   greet: () => string;
// }

// let user: User = {
//   name: 'Mash',
//   age: 31,
//   greet() {
//     console.log('hello there');
//     return this.name;
//   }
// }

// let a: null;
// a = null;

// const inputEl = document.getElementById('user-name')!;
// if (!inputEl) {
//   throw new Error('Element not Found!');
// }
// console.log(inputEl.value);

// const inputEl = document.getElementById('user-name')! as HTMLInputElement;
// console.log(inputEl?.value);

// function process(val: unknown) {
//   console.log(val);
// }

// function generateError(msg?: string) {
//   throw new Error(msg);
// }

// generateError();

// type User = {
//   name: string;
//   age: number;
//   role?: 'admin' | 'guest';
// };

let input = '';
const didInput = input ?? false;
