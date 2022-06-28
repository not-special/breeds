import express from "express";
import flattenAllBreeds from "./flattenAllBreeds.js";
import getBreeds from "./getBreeds.js";

const app = express();
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
