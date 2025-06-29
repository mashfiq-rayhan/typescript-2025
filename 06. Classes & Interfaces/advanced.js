"use strict";
// class User {
//   constructor(private firstName: string, private lastName: string) {}
//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }
// const mash = new User('Mash', 'Ray');
// console.log(mash.fullName);
class User {
    _firstName = '';
    _lastName = '';
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
    static eid = 'User';
    static greet() {
        console.log('Hello!');
    }
}
console.log(User.eid);
User.greet();
const mash = new User();
// mash._firstName = '';
mash.firstName = 'Mash';
mash.lastName = 'Ray';
console.log(mash.fullName);
class Employee extends User {
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
        // super.firstName = 'Mash';
    }
    work() {
        console.log(this._firstName);
    }
}
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
        // logic
    }
}
class SideDrawerElement extends UIElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
