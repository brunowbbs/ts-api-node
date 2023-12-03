import express from "express";
const app = express();

app.get("/ping", (request, response) => {
  return response.json({ message: "pong" });
});

app.listen(8000, () => console.log("Server iniciado"));
