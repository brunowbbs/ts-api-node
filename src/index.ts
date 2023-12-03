import express from "express";
const app = express();

app.get("/ping", (request, response) => {
  return response.json({ message: "pong" });
});

app.listen(3333, () => console.log("Server iniciado"));
