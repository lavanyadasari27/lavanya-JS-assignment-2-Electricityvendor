const electricityVendor = require('./vendor');

const lukeReadings = [1, 2];
const lucasReadings = [2, 4];
const lucyReadings = [1, 3];
const entro = new electricityVendor("Entro", 3, lukeReadings);
const thunder = new electricityVendor("Thunder", 3.5, lucasReadings);
const bolt = new electricityVendor("Bolt", 4, lucyReadings);
console.log(entro.getTotalCost());
console.log(thunder.getTotalCost());
console.log(bolt.getTotalCost());
console.log(entro.getTotalReadings());
console.log(thunder.getTotalReadings());
console.log(bolt.getTotalReadings());
console.log(entro.applyDiscount(true));
console.log(thunder.applyDiscount(true));
console.log(bolt.applyDiscount(true));