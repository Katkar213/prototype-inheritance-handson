function Outer(name) {
    this.name = name;
  }
  
  Outer.prototype.greet = function() {
    console.log(`Hello, I am ${this.name}`);
  }
  
  function Inner(name, age) {
    Outer.call(this, name);
    this.age = age;
  }

  Inner.prototype = Object.create(Outer.prototype);
  Inner.prototype.introduce = function() {
    console.log(`Hi, I am ${this.name} and my age is ${this.age} years old`);
  }
  
  const outer = new Outer('ketan');
  const inner = new Inner('Ram', 51);
  outer.greet(); 
  inner.greet(); 
 inner.introduce();



 function PropertyNames(obj) {
    let propertyNames1 = [];

    function getPropertiesRecursive(obj) {
      const proto = Object.getPrototypeOf(obj);
      propertyNames1.push(...Object.getOwnPropertyNames(obj));
  
      if (proto !== null) {
        getPropertiesRecursive(proto);
      }
    }
  
    getPropertiesRecursive(obj);
    return propertyNames1;
  }
  
  const obj = {
    a: 1,
    b: 2
  };
  
  const parent = {
    c: 3
  };
  obj.__proto__ = parent;
  const allPropertyNames = PropertyNames(obj);
  console.log(allPropertyNames);