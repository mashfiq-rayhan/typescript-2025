"use strict";
// type Athenticattable = {
//   email: string;
//   password: string;
//   login(): void;
//   logout(): void;
// }
class AthenticattableUser {
    email;
    password;
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    login() { }
    logout() { }
}
function authenticate(user) { }
let user;
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
