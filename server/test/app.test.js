const request = require("supertest");

const app = require("../app");

describe("API", () => {
  let api;

  beforeAll(() => {
    // start listening to server
    api = app.listen(3030);
  });

  afterAll(() => {
    // close down server
    api.close();
  });

  it("Responds to a GET request at / with a 200 status", () => {
    request(api).get("/").expect(200);
  });
});
