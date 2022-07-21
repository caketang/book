
let i = 1

function foo() {
   
  console.log(++i)
}

module.exports.foo = foo
module.exports.i = i

// or exports.xxx = value