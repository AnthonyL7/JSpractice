function zeroFuel(distanceToPump, mpg, fuelLeft) {
  if ((fuelLeft * mpg) >= distanceToPump) {
    return true;
  } else {
    return false;
  }
}

result = zeroFuel(50,25,2)
console.log(result)