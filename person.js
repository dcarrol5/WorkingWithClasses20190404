class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName) {
        this._firstName = newFirstName;
    }
    get firstName() {
        return this._firstName;
    }
    set lastName(newLastName) {
        this._lastName = newLastName;
    }
    get lastName() {
        return this._lastName;
    }
    set age(newAge) {
        if (!isNaN(newAge)) {
            this._age = newAge;
        }
        else {
            this._age = 30;
        }
    }
    get age() {
        return this._age;
    }

}


module.exports = Person