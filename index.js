function produceDrivingRange(blockRange) {
  return function(arg1, arg2) {
    let range = parseInt(arg2) - parseInt(arg1);
    if (range < blockRange ) {
      let inRange = blockRange - range
      return `within range by ${inRange}`
    }
    else {
      let outOfRange = range - blockRange
      return `${outOfRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function(bill) {
    return bill * tipPercent
  }
}

function createDriver() {
  let DriverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
