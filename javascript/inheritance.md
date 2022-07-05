## 1. 原型链继承
``` javascript
   function Parent(){
     this.name = 'xiaoming'
   }
   Parent.prototype.getNmae = function(){
     console.log(this.name)
   }
   function Child(){} 
   Child.prototype = new Parent()
   
```
