"use strict";
let names = ['Mash', 'Safa'];
let store = {};
store.name = 'Mash';
store.isInstructor = false;
let nameStore = {};
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, 'Mash');
function mergeObj(a, b) {
    return { ...a, ...b };
}
const merged = mergeObj({ username: 'Mash' }, { age: 31 });
console.log(merged);
class User {
    id;
    constructor(id) {
        this.id = id;
    }
}
const user = new User('id01');
console.log(user.id);
