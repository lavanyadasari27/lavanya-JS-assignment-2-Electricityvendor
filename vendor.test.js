const electricityVendor = require('./vendor');

describe('electricityVendor',()=> {
 test('test for totalunits', () => { 
    const entro = new electricityVendor("Entro",3,[1,2]);
    expect(entro.getTotalCost()).toBe(9);
  }) 

  test('test for totalreadings', () => { 
    const entro = new electricityVendor("Entro",3,[1,2]);
    expect(entro.getTotalReadings()).toBe(3);
  }) 

  test('test for discountprice', () => { 
    const entro = new electricityVendor("Entro",3,[1,2]);
    expect(entro.applyDiscount(true)).toEqual([0.88, 1.8]);
  }) 
});
