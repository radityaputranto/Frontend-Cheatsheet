// first letter with uppercase indicate constraction function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const personOne = new Person("jhon", 20);
const personTwo = new Person("jhon", 25);
Person.prototype.hobby = "drawing";
console.log(personOne);
console.log(personTwo);


function Employee() {
    //without using this
    /* const name = "jhon";
    const age = 25;

    return {
        name, age
    } */

    //using this
    this.name = "jhon";
    this.age = 25;

    return {
        name, age
    }
}
const employeeOne = Employee();
console.log(employeeOne.name, employeeOne.age);


//using arrow function
const Manager = (newName) => {
    this.name = newName;
    return {
        name: this.name,
    };
};
const managerOne = Manager("Doe");
console.log(managerOne.name);


/* CLASS CONSTRUCTOR */
class Student {
    constructor(newName, newAge) {
        this.name = newName
        this.age = newAge ? newAge : this.randomize()
    }

    randomize() {
        return Math.floor(Math.random(100) * 100)
    }

    static log
}
const student = new Student("Mike", 27);
console.log(student.name);
const student2 = new Student("Lauda");
console.log(student2.age);


/* CLASS METDHO */
class Something {
    static randomize() {
        return Math.random(100) * 100;
    }
    static log(str) {
        console.log(str);
    }
}
Something.log(Something.randomize());
