import { mul, sum } from "./js/math.js";
const { dateFormat, priceFormat } = require('./js/farmat.js')

console.log(sum(20, 30));
console.log(mul(20, 30));

console.log(dateFormat(), priceFormat());
