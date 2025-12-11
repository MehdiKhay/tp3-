class person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greets(): string {
        return `mar7be ${this.name}`;
    }
}
let person1 = new person("mehdi", 20);
console.log(person1.greets());
class student extends person {
    school: string;
    constructor(name: string, age: number, school: string) {
        super(name, age);
        this.school = school;
    }
}
let student1 = new student("mahdy", 19, "fst");
console.log(student1.greets());

abstract class shape {
    abstract area(): number;
}
class circle extends shape {
    radius: number;
    
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    
    area(): number {
        return 3.14 * this.radius * this.radius;
    }
}
class rectangle extends shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width * this.height;
    }
}

let c = new circle(2);
let r = new rectangle(3, 4);
console.log("circle:", c.area());
console.log("rect:", r.area());
interface drivable {
    drive(): string;
}
class car implements drivable {
    model: string;
    constructor(model: string) {
        this.model = model;
    }
    drive(): string {
        return `nsouk fi ${this.model}`;
    }
}
let mycar = new car("fiat");
console.log( mycar.drive());