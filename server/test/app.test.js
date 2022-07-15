const request = require("supertest");

const app = require("../app");

describe("API", () => {
  let api;

  beforeAll(() => {
    // start listening to server
    api = app.listen(3030);
  });

  // "done" parameter is a callback function, can be used to say "yes it's finished" to be extra safe - this callback function is found in jest
  afterAll((done) => {
    // close down server
    api.close(done);
  });

  it("Responds to a GET request at / with a 200 status", (done) => {
    request(api).get("/").expect(200, done);
  });

  it("Responds to a GET request at /flavours with a 200 status", (done) => {
    request(api).get("/flavours").expect(200, done);
  });

  it("Responds to a GET request at /flavours with a JSON object", (done) => {
    request(api).get("/flavours").expect("Content-Type", /json/, done);
  });

  //   it("Responds to a GET request at /flavours with a JSON object that has a 'flavours' key", (done) => {
  //     request(api)
  //       .get("/flavours")
  //       .end((err, res) => {
  //         try {
  //           expect.assertions(2);
  //           const data = res.body;
  //           expect("----------" in data);
  //           expect(data["flavours"] instanceof Array);
  //           done();
  //         } catch (err) {
  //           done(err);
  //         }
  //       });
  //   });
});
