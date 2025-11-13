const request = require("supertest");
const app = require("../app");

describe("testes simples", () => {
  test("lista vazio", async () => {
    const res = await request(app).get("/users");
    expect(res.status).toBe(200);
  });

  test("cria user", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "teste", email: "t@t.com" });
    expect(res.status).toBe(201);
  });
});