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
    if (discountFlag) {
      const modifiedReadings = this.readings.map((number) => {
        if (number % 2 === 0) {
          return (number = number - number * 0.1);
        } else {
          return (number = number - number * 0.12);
        }
      });
     return modifiedReadings;
    }
  }
}

module.exports = electricityVendor;


