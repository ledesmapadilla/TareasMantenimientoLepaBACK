import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  rol: {
    type: String,
    required: true,
    enum: ["Admin", "Operario"],
  },
  contraseña: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100,
  },
});

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;
