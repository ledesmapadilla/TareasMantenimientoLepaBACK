import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema({
  fecha: {
    type: String,
    required: true,
  },
  tarea: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 500,
  },
  maquina: {
    type: String,
    required: true,
  },
  urgencia: {
    type: String,
    required: true,
    enum: ["Baja", "Media", "Alta"],
  },
  responsable: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  estado: {
    type: String,
    required: true,
    enum: ["Pendiente", "En proceso", "Terminada"],
    default: "Pendiente",
  },
  detalle: {
    type: String,
    maxlength: 2000,
    default: "",
  },
});

const Tarea = mongoose.model("tarea", tareaSchema);

export default Tarea;
