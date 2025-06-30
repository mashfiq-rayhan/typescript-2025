type User = { name: string; age: number };

type UserKeys = keyof User;

let validKey: UserKeys;

validKey = 'name';
validKey = 'age';

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  const val = obj[key];
  if (val === undefined || val === null) {
    throw new Error('Accessing undefined or null value.');
  }
  return val;
}

const data = { id: 1, isSorted: false, values: [1, 0, 1] };
getProp(data, 'values');

const user = { name: 'Mash', age: 31 };
const val = getProp(user, 'age');
