type DataStore = {
  [prop: string]: number | boolean;
};

let someObj: Record<string, number | boolean>;

let store: DataStore = {};

store.id = 6;
store.isOpen = false;
// store.name = 'Dokan';

let roles = ['admin', 'guest', 'editor'] as const;
// role.push('max');
const firstRole = roles[0];

const dataEntries = {
  entry1: 0.51,
  entry2: -1.23
} satisfies Record<string, number>;