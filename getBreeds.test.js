import getBreeds from "./getBreeds";

const axios = require("axios");
jest.mock("axios");

describe('getBreeds', () => {
  it("retrieves breeds", async () => {
    axios.get.mockResolvedValue({
      statusCode: 200,
      data: { message: {
        "hound": ["A", "B"],
        "lab": [],
      }},
    });
  
    const response = await getBreeds();
    expect(response.statusCode).toEqual(200);
    expect(response.data.message).toEqual({"hound": ["A", "B"], "lab": []});
  });
  
  it("handles external API error", async () => {
    const errorMessage = "Network Error";
    
    axios.get.mockImplementationOnce(() => {
      Promise.reject(new Error(errorMessage));
    })
    try {
      await getBreeds();
      // await expect(getBreeds()).rejects.toEqual(new Error(errorMessage));
    } catch (err) {
      console.log("***here***: ", err);
      // await expect(getBreeds()).rejects.toThrow("?");
      expect(err).toEqual(new Error(errorMessage));
    }
    
  })
})

