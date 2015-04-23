// TypeScript Examples

// Static Typing 
// number
var num: number;
num = 1;
// num = "one"; // => compile error

var name: string = "Jamal"; // name = 2; => compile error

var isSelected: boolean = true; // isSelected = 0;

var array: Array<string> = ["John", "Jacob", "Jingleheimer", "Smith"]; 
// array.push(100); => compile error

// TypeScript also has type inference

// Functions
var multiply = (x:number, y:number) => x * y;
var result:number = multiply(2, 4);
console.log('result:', result);

// Optional Parameters
function buildName(firstName:string, lastName:string) {
  return firstName + " " + lastName;
}
// var buildNameResult1 = buildName("Bob"); => Compile error
// var buildNameResult1 = buildName("Bob", "Smith", "Jr."); => Compile error
var buildNameResult1 = buildName("Bob", "Smith");

function buildNameOptional(firstName:string, lastName?:string) {
  return firstName + " " + lastName;
}
var buldNameOptionalResult = buildNameOptional("Jamal"); // No error since lastName is optional


// Classes
class Car {
  engine: string;

  constructor(engine: string) {
    this.engine = engine;
  }
}

var m6 = new Car('V8');
console.log(m6);

// Adding function to prototype
class UsedCar {
  engine: string;

  constructor(engine: string) {
    this.engine = engine;
  }

  start() {
    return "Started " + this.engine;
  }
}

// Inheritance
class Auto {
  engine: string;
  constructor(engine:string) {
    this.engine = engine;
  }
}

class ManlyTruck extends Auto {
  bigTires: boolean;
  constructor(engine: string, bigTires: boolean) {
    super(engine);
    this.bigTires = bigTires;
  }
}


// Interfaces
interface ICar {
  engine: string;
  color:string;
}

class NewCar implements ICar {
  constructor(public engine:string, public color:string) {
  }
}

var bmwX5 : ICar;
bmwX5 = {engine: "V6", color:"blue"}  // bmwX5 = {engine: "V8", trim: 3.0}  => compile error

// Modules
// Implicit Internal Modules
class TestClass {
  private a = 2;
  private b = 4;
};
var test = new TestClass();

// Named Internal Modules
module Shapes {
  class Rectangle {
    constructor(public height: number, public width: number) {
    }
  }
  
  var rect1 = new Rectangle(10, 4);
}
// var rect2 = Shapes.Rectangle(10, 4); => Compile error

// Export example
module Team {
  export class NbaTeam {
    constructor(public city:string, public name:string) {
      
    }
  }
}
var knicks = new Team.NbaTeam("NY", "Knicks");


// Generics
function identity<id>(arg: id): id {
  return arg;
}
var identityResult = identity("foo");
console.log(identityResult);


// Mixin
// Disposable mixin
class Disposable {
  isDisposed: boolean;
  dispose() {
    this.isDisposed = true;
  }
}


// Activatable mixin
class Activatable {
  isActive: boolean;
  activate() {
    this.isActive = true;
  }
  deactivate() {
    this.isActive = false;
  }
}

class SmartObject implements Disposable, Activatable {
  constructor() {
    setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
  }
  interact() {
    this.activate();
  }
  
  // Disposable Mixin
  isDisposed: boolean = false;
  dispose: () => void;
  // Activatable Mixin
  isActive:boolean = false;
  activate: () => void;
  deactivate: () => void;
}
applyMixins(SmartObject, [Disposable, Activatable]);

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    }); 
}