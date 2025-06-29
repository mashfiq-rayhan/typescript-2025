// class User {
//   constructor(private firstName: string, private lastName: string) {}

//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }

// const mash = new User('Mash', 'Ray');
// console.log(mash.fullName);

class User {
  protected _firstName: string = '';
  private _lastName: string = '';

  set firstName(name: string) {
    if (name.trim() === '') {
      throw new Error('Invalid name.');
    }
    this._firstName = name;
  }

  set lastName(name: string) {
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
  constructor(public jobTitle: string) {
    super();
    // super.firstName = 'Mash';
  }

  work() {
    console.log(this._firstName);
  }
}

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {
    // logic
  }
}

class SideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: 'left' | 'right') {
    super(identifier);
  }

  // 
}
