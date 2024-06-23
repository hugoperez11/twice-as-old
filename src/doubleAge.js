export function doubleAge(fatherAge, sonAge) {
    const doubleSonAge = sonAge * 2;
    const difference = fatherAge - doubleSonAge;
    return Math.abs(difference);
  }
  
