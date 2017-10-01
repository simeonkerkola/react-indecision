const user = {
  name: 'Simi',
  cities: ['tokyo', 'rishikesh', 'helsinki'],

  // printPlacesLived: function () {
  printPlacesLived() {
    return this.cities.map(city => `${this.name} has lived in ${city}`)
  },
}

console.log(user.printPlacesLived())

const multiplier = {
  numbers: [1, 2, 3, 5, 8],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy)
  },
}

console.log(multiplier.multiply())
