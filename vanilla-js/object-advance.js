/* Getter adn Setter */
class Person {
    #age
    constructor(newName, newAge, gender) {
        this.name = newName;
        this.#age = newAge;
        this.gender = gender;
    }
    get getName() {
        return ((this.gender == "M") ? "Hi, Mr." : "Hi, Mrs.") + this.name;
    }
    getAge() {
        return this.#age;
    }
    set setName(changedName) {
        this.name = changedName;
    }
}
const personOne = new Person("jhon", 20, "M");
personOne.setName = "Doe";
console.log(personOne.getName);

/* private properties */
console.log(personOne.age); //cannot get without invoke
console.log(personOne.getAge());


/* ENCAPSULCATION */
class ShippingCost {
    #tax
    constructor(weight) {
        this.#tax = 1000;
        this.fee = this.calculatePrice(weight);
    }
    calculatePrice(weight) {
        return weight * 2000;
    }
    get totalPrice() {
        return this.#tax + this.fee;
    }
}
const ongkir = new ShippingCost(10);
console.log(ongkir.totalPrice);
ongkir.tax = 5000; //invalid because tax encapsulated with private property
console.log(ongkir.totalPrice);


/* INHERITENCE */
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.job = "jobless";
    }

    get getJob() {
        return this.job;
    }
}
//child class
class PeopleWithJob extends People {
    constructor(name, age, job) {
        //super using for create new parent class People
        super(name, age);
        this.job = job;
    }
}
const you = new People("You", 65);
const me = new PeopleWithJob("Me", 27, "Software Engineer");
console.log(you.getJob);
console.log(me.getJob);


/* 
POLYMORPHISM 
reuse another class with some adjustment than rewrite the code
*/
class Indoneian {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        return `Halo, nama saya ${this.name}`;
    }
}
class Javanase extends Indoneian {
    constructor(name) {
        super(name);
    }
    greeting() {
        return `Sugeng enjing, nami kula ${this.name}`;
    }
}
const orangIndonesia = new Indoneian("Jhon");
const orangJawa = new Javanase("Doe");
console.log(orangIndonesia.greeting());
console.log(orangJawa.greeting());


/* 
ABSTRACTION
hide some detail from object
 */

