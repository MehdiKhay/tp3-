var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.greets = function () {
        return "mar7be ".concat(this.name);
    };
    return person;
}());
var person1 = new person("mehdi", 20);
console.log(person1.greets());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    return student;
}(person));
var student1 = new student("mahdy", 19, "fst");
console.log(student1.greets());
var shape = /** @class */ (function () {
    function shape() {
    }
    return shape;
}());
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    circle.prototype.area = function () {
        return 3.14 * this.radius * this.radius;
    };
    return circle;
}(shape));
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return rectangle;
}(shape));
var c = new circle(2);
var r = new rectangle(3, 4);
console.log("circle:", c.area());
console.log("rect:", r.area());
var car = /** @class */ (function () {
    function car(model) {
        this.model = model;
    }
    car.prototype.drive = function () {
        return "nsouk fi ".concat(this.model);
    };
    return car;
}());
var mycar = new car("fiat");
console.log(mycar.drive());
