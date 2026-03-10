import Tarea from "../models/tareas.js";

export const listarTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener las tareas" });
  }
};

export const obtenerTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findById(req.params.id);
    if (!tarea) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
    res.status(200).json(tarea);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener la tarea" });
  }
};

export const crearTarea = async (req, res) => {
  try {
    const nuevaTarea = new Tarea(req.body);
    await nuevaTarea.save();
    res.status(201).json({ mensaje: "Tarea creada", tarea: nuevaTarea });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ mensaje: error.message });
    }
    res.status(500).json({ mensaje: "Error al crear la tarea" });
  }
};

export const editarTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tarea) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
    res.status(200).json({ mensaje: "Tarea actualizada", tarea });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ mensaje: error.message });
    }
    res.status(500).json({ mensaje: "Error al editar la tarea" });
  }
};

export const borrarTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findByIdAndDelete(req.params.id);
    if (!tarea) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
    res.status(200).json({ mensaje: "Tarea borrada" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al borrar la tarea" });
  }
};
