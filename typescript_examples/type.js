// TypeScript Examples
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Static Typing 
// number
var num;
num = 1;
// num = "one"; // => compile error
var name = "Jamal"; // name = 2; => compile error
var isSelected = true; // isSelected = 0;
var array = ["John", "Jacob", "Jingleheimer", "Smith"];
// array.push(100); => compile error
// TypeScript also has type inference
// Functions
var multiply = function (x, y) { return x * y; };
var result = multiply(2, 4);
console.log('result:', result);
// Optional Parameters
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
// var buildNameResult1 = buildName("Bob"); => Compile error
// var buildNameResult1 = buildName("Bob", "Smith", "Jr."); => Compile error
var buildNameResult1 = buildName("Bob", "Smith");
function buildNameOptional(firstName, lastName) {
    return firstName + " " + lastName;
}
var buldNameOptionalResult = buildNameOptional("Jamal"); // No error since lastName is optional
// Classes
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    return Car;
})();
var m6 = new Car('V8');
console.log(m6);
// Adding function to prototype
var UsedCar = (function () {
    function UsedCar(engine) {
        this.engine = engine;
    }
    UsedCar.prototype.start = function () {
        return "Started " + this.engine;
    };
    return UsedCar;
})();
// Inheritance
var Auto = (function () {
    function Auto(engine) {
        this.engine = engine;
    }
    return Auto;
})();
var ManlyTruck = (function (_super) {
    __extends(ManlyTruck, _super);
    function ManlyTruck(engine, bigTires) {
        _super.call(this, engine);
        this.bigTires = bigTires;
    }
    return ManlyTruck;
})(Auto);
var NewCar = (function () {
    function NewCar(engine, color) {
        this.engine = engine;
        this.color = color;
    }
    return NewCar;
})();
var bmwX5;
bmwX5 = { engine: "V6", color: "blue" }; // bmwX5 = {engine: "V8", trim: 3.0}  => compile error
// Modules
// Implicit Internal Modules
var TestClass = (function () {
    function TestClass() {
        this.a = 2;
        this.b = 4;
    }
    return TestClass;
})();
;
var test = new TestClass();
// Named Internal Modules
var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        return Rectangle;
    })();
    var rect1 = new Rectangle(10, 4);
})(Shapes || (Shapes = {}));
// var rect2 = Shapes.Rectangle(10, 4); => Compile error
// Export example
var Team;
(function (Team) {
    var NbaTeam = (function () {
        function NbaTeam(city, name) {
            this.city = city;
            this.name = name;
        }
        return NbaTeam;
    })();
    Team.NbaTeam = NbaTeam;
})(Team || (Team = {}));
var knicks = new Team.NbaTeam("NY", "Knicks");
// Generics
function identity(arg) {
    return arg;
}
var identityResult = identity("foo");
console.log(identityResult);
// Mixin
// Disposable mixin
var Disposable = (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        this.isDisposed = true;
    };
    return Disposable;
})();
// Activatable mixin
var Activatable = (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        this.isActive = true;
    };
    Activatable.prototype.deactivate = function () {
        this.isActive = false;
    };
    return Activatable;
})();
var SmartObject = (function () {
    function SmartObject() {
        var _this = this;
        // Disposable Mixin
        this.isDisposed = false;
        // Activatable Mixin
        this.isActive = false;
        setInterval(function () { return console.log(_this.isActive + " : " + _this.isDisposed); }, 500);
    }
    SmartObject.prototype.interact = function () {
        this.activate();
    };
    return SmartObject;
})();
applyMixins(SmartObject, [Disposable, Activatable]);
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
