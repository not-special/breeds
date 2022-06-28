
const flattenAllBreeds = (allBreeds) => {
  let flatBreeds = [];
  for (let breed in allBreeds) {
    if (allBreeds[breed].length === 0) {
      flatBreeds.push(breed)
    } else {
      allBreeds[breed].forEach(subBreed => {
        flatBreeds.push(`${subBreed} ${breed}`)
      })
    }
  }
  return flatBreeds;
}

module.exports = flattenAllBreeds;