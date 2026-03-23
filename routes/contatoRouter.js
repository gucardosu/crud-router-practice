import { Router } from "express";
import * as controller from "../controller/contatoController.js";

const router = Router();

app.get("/contatos", controller.listar);
app.get("/contatos/:id", controller.buscarPorID);
app.post("/contatos", controller.criarContato);
