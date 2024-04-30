"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Emp_id;
class Emp {
    constructor(id, name, address) {
        // # is symbol for private property
        _Emp_id.set(this, void 0);
        __classPrivateFieldSet(this, _Emp_id, id, "f");
        this.name = name;
        this.address = address;
    }
    getuserDetails() {
        return `${this.name} ${this.address}`;
    }
}
_Emp_id = new WeakMap();
let emp1 = new Emp(2, 'user2', 'india 23');
class Manager extends Emp {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getnameandaddess() {
        return `${this.name} at manager of ${this.address}`;
    }
}
// emp1.id=1;
// emp1.name = 'user1';
// emp1.address = 'india';
let add = emp1.getuserDetails();
console.log(emp1);
let mike = new Manager(2, 'Mike', 'driver');
console.log(mike);
