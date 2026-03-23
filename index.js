import express from "express";
import * as controller from "./controller/contatoController.js";

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Aplicação rodando em: http://localhost:3000");
});
