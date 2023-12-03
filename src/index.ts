import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.get("/ping", (request, response) => {
  return response.json({ message: "pong" });
});

app.listen(process.env.PORT, () =>
  console.log(`Server iniciado in port ${process.env.PORT}`)
);
