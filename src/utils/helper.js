function addTwo(number) {
  if (isNaN(number)) {
    throw new Error('Parameter is not a number')
  }
  return number + 2
}

export default addTwo
