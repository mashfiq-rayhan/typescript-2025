// type Athenticattable = {
//   email: string;
//   password: string;
//   login(): void;
//   logout(): void;
// }

interface Athenticattable {
  email: string;
  password: string;
  login(): void;
  logout(): void;
}

interface AthenticattableAdmin extends Athenticattable {}


class AthenticattableUser implements Athenticattable {
  constructor(public email: string, public password: string) {}
  login() {}

  logout() {}
}

function authenticate(user: Athenticattable) {}

let user: Athenticattable;

user = {
  email: 'mash@test.gmail',
  password: 'abc1',
  login() {
    //......
  },
  logout() {
    //......
  }
};
