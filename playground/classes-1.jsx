class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hi, I'm ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)   // defaults for name and age are already set up in Person
    this.major = major
  }
  hasMajor() {
    return !!this.major // '' is false
  }
  getDescription() {
    let description = super.getDescription()
    if (this.hasMajor()) {
      description += ` Their major is: ${this.major}.`
    }
    return description
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting()
    if (this.homeLocation) greeting += ` I'm visiting from ${this.homeLocation}.`
    return greeting
  }
}


const me = new Student('Simeon Kerkola', 26, 'Computer Science')
console.log(me)
console.log(me.hasMajor());
console.log(me.getDescription());

const another = new Student()
console.log(another.hasMajor());
console.log(another.getDescription())

const mark = new Traveller('Mark Johnsson', 5, 'Helsinki')
console.log(mark);
console.log(mark.getGreeting());
