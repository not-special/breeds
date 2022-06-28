const flattenAllBreeds = require("./flattenAllBreeds.js");

test("flattens obj of breeds to array", () => {
  const toTest = {
    akita: [],
    buhund: ['norwegian'],
    bulldog: ['boston', 'english', 'french'],
    bullterrier: ['staffordshire'],
  };

  const assertion = [
    'akita',
    'norwegian buhund',
    'boston bulldog',
    'english bulldog',
    'french bulldog',
    'staffordshire bullterrier'
  ];

  const flattened = flattenAllBreeds(toTest);
  expect(flattened).toEqual(assertion);
});
