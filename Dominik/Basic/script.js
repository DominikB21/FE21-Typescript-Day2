"use strict";
// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
class Person {
    constructor(fName, lName, age, jobTitle) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printInfo() {
        return `My name is ${this.fName} ${this.lName} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}
// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
class PersonFullInfo extends Person {
    constructor(fName, lName, age, jobTitle, salary, jobLocation) {
        super(fName, lName, age, jobTitle);
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.jobTitle = jobTitle;
        this.salary = salary;
        this.jobLocation = jobLocation;
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    printFullInfo() {
        return `${super.printInfo} and I get ${this.salary} every month, and I work in ${this.jobLocation}.`;
    }
}
