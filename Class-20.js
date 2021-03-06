// Using Inheritance with Javascript Classes
"use strict";

(() => {
  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    isAdult() {
      return this.age >= 18;
    }

    get fullName() {
      return this.firstName + " " + this.lastName;
    }
    set fullName(fullName) {
      var nameParts = fullName.split(" ");
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }
  }

  class Student extends Person {
    constructor(firstName, lastName, age) {
      super(firstName, lastName, age);
      this._enrolledCourses = [];
    }
    enroll(courseId) {
      this._enrolledCourses.push(courseId);
    }
    getCourses() {
      return (
        this.fullName +
        "'s enrolled courses are: " +
        this._enrolledCourses.join(", ")
      );
    }
  }

  let sebastian = new Student("Sebastián", "García", 23);
  sebastian.enroll("CS101");
  sebastian.enroll("MA101");
  sebastian.enroll("PS204");
  console.log(sebastian.getCourses());
})();
