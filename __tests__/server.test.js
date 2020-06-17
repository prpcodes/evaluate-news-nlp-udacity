//reference https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6

const request = require('supertest')
const app = require('../src/server/index')


describe("GET / ", () => {
  test("It should respond with dist/index.html file & Status Code: 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
