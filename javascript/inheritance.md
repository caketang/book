### 1. 原型链继承
``` javascript
   function Parent(){
     this.name = 'xiaoming'
   }
   Parent.prototype.getNmae = function(){
     console.log(this.name)
   }
   function Child(){} 
   Child.prototype = new Parent()
   let child = new Child()
   console.log(child.getName()) // xiaoming
```
##### 分析
1. 引用类型的属性被所有实例共享
2. 在创建child实例时，不能向Parent传参

### 2. 借用构造函数（经典继承）
``` javascript
  function Parent(){
    this.name = 'xiaoming'
  }
  function Child(){
    Parent.call(this)
  }
  let child = new Child()
  
```
##### 分析

1. 生成实例可以向Parent传参
2. 避免了引用类型被所有实例共享
3. 每次构造实例都要调用Parent

### 3. 组合继承
``` javascript
   function Parent(){
     this.name = 'xiaoming'
   }
   Parent.prototype.getNmae = function(){
     console.log(this.name)
   }
   function Child(){
     Parent.call(this)
   } 
   Child.prototype = new Parent()
   Child.prototype.constructor = Child
   let child = new Child()
   console.log(child.getName()) // xiaoming
  
```
##### 分析
1. 融合了原型链继承和借用构造函数的优点

### 4. 原型式继承
```javascript
  function proObj(o){
     function F(){}
     F.prototype = o
     return new F()
  }
```
##### 分析
1. 包含引用类型的属性始终被实例共享
``` javascript
var person = {
    name: 'xiaoming',
    friends: [1, 2]
}

var person1 = createObj(person);
var person2 = createObj(person);

person1.name = 'person1';
console.log(person2.name); // xiaoming

person1.friends.push(3);
console.log(person2.friends); // [1,2,3]
```
### 5. 寄生式继承
创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。


``` javascript
function  proObj(o){
  let obj = Object.create(o)
  obj.sayName = function () {
        console.log('xiaoming');
    }
  return clone
}
```
##### 分析
1. 每次创建实例都创建一遍方法

### 6.0寄生组合式继承
组合式继承有个缺点 会调用两次Parent函数， 我们可以采用寄生组合式继承可以规避调用两次的问题
``` javascript
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

// 关键的三步
var F = function () {};

F.prototype = Parent.prototype;

Child.prototype = new F();


var child1 = new Child('xiaoming', '18');

console.log(child1);
```
