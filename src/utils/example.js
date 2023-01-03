export class CustomList {
  constructor(nums) {
    this.nums = nums
  }

  getNums() {
    return this.nums
  }
}

export function evaluateForEven(customList) {
  if (!(customList instanceof CustomList)) {
    throw new Error('Parameter is not a CustomList.')
  } else if (customList.getNums().length === 0) {
    return false
  } 
  return customList.getNums().some(num => num % 2 === 0 && num !== 0)
}