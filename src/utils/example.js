export class CustomList {
  constructor(nums) {
    this.nums = nums
  }

  containsEven() {
    return this.nums.length > 0
  }

  getNums() {
    return this.nums
  }
}

export function evaluateForEven() {
  return false
}
