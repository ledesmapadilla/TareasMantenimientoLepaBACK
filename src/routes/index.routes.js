import { Router } from "express";
import {
  listarTareas,
  obtenerTarea,
  crearTarea,
  editarTarea,
  borrarTarea,
} from "../controllers/tareas.controller.js";
import {
  listarUsuarios,
  obtenerUsuario,
  crearUsuario,
  editarUsuario,
  borrarUsuario,
} from "../controllers/usuarios.controller.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API funcionando" });
});

router.route("/tareas").get(listarTareas).post(crearTarea);

router
  .route("/tareas/:id")
  .get(obtenerTarea)
  .put(editarTarea)
  .delete(borrarTarea);

router.route("/usuarios").get(listarUsuarios).post(crearUsuario);

router
  .route("/usuarios/:id")
  .get(obtenerUsuario)
  .put(editarUsuario)
  .delete(borrarUsuario);

export default router;
