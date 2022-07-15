// imports app
const app = require("./app");

// actually starts server & starts listening on said server
// starts server
const port = 3000;

app.listen(port, () => {
  console.log(`started listening on port ${port}`);
});
