const express = require("express");
const app = express();

const flattenAllBreeds = require("./flattenAllBreeds.js");
const getBreeds = require("./getBreeds.js");

const port = 3001;


app.get("/breeds", async (req, res) => {
  try{
    const breeds = await getBreeds();
    const flatBreedsArr = flattenAllBreeds(breeds.data.message);
    res.json(flatBreedsArr);
  } catch(err) {
    res.status(500).send("Call to dog breeds API failed.")
  }
})

// app.use((req, res, next) => {
//   console.log("here!");
//   return res.json({
//     error: "Error"
//   })
// })


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;