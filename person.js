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
        this.lastName = newLastName;
    }
    get lastName() {
        return this.lastName;
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

get age(){
    if(!isNaN(this.age))
}
module.exports = Person