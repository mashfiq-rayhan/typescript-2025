let names: Array<string> = ['Mash', 'Safa'];

type DataStore<T> = {
  [prop: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = 'Mash';
store.isInstructor = false;

let nameStore: DataStore<string> = {};

function merge<T, U>(a: T, b: U) {
  return [a, b];
}

const ids = merge(1, 'Mash');

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = mergeObj({ username: 'Mash' }, { age: 31 });
console.log(merged);

class User<T> {
  constructor(public id: T) {}
}

const user = new User('id01');
console.log(user.id);

interface Role<T> {}