// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Module
// .cjs -> para utilizar CommonJs

import { sum, sub, mult } from './sum.mjs'

console.log(sum(1, 2))
console.log(sub(1, 2))
console.log(mult(1, 2))