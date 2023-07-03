class electricityVendor {
  name;
  chargeRate;
  readings;
  constructor(name, chargeRate, readings) {
    this.name = name;
    this.chargeRate = chargeRate;
    this.readings = readings;
  }
  getTotalCost() {
    const totalUnits = this.readings.reduce((acc, item) => acc + item, 0);
    return totalUnits * this.chargeRate;
  }

  getTotalReadings() {
    let sum = 0;
    const totalReadings = this.readings.map((num) => (sum = sum + num));
    return sum;
  }

  applyDiscount(discountFlag) {
    let modifiedReadings=this.readings
    if (discountFlag) {
      modifiedReadings =this.readings.map((number) => {
        if (number % 2 === 0) {
          return (number = number - number * 0.1);
        } else {
          return (number = number - number * 0.12);
        }
      });
      this.getdiscountedPrice(modifiedReadings);
    //  return(modifiedReadings);

    }
    console.log(modifiedReadings);
  }
  getdiscountedPrice(modifiedReadings){
    // let modifiedReadings= this.applyDiscount(true);
    console.log(modifiedReadings);
    // const newarr = modifiedReadings.map((number)=>{
    //   return (number*this.chargeRate)
    // });
    // return(newarr);
  }
}

const lukeReadings = [1, 2];
const lucasReadings = [2, 4];
const lucyReadings = [1, 3];
const entro = new electricityVendor("Entro", 3, lukeReadings);
const thunder = new electricityVendor("Thunder", 3.5, lucasReadings);
const bolt = new electricityVendor("Bolt", 4, lucyReadings);
console.log(entro.getTotalCost());
// console.log(thunder.getTotalCost());
// console.log(bolt.getTotalCost());
// console.log(entro.getTotalReadings());
// console.log(thunder.getTotalReadings());
// console.log(bolt.getTotalReadings());
// console.log(entro.applyDiscount(true));
// console.log(thunder.applyDiscount(true));
// console.log(bolt.applyDiscount(true));
console.log(entro.getdiscountedPrice(1));

// module.exports = electricityVendor;


