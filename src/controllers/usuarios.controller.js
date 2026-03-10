import Usuario from "../models/usuario.js";

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los usuarios" });
  }
};

export const obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el usuario" });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: "Usuario creado", usuario: nuevoUsuario });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ mensaje: error.message });
    }
    res.status(500).json({ mensaje: "Error al crear el usuario" });
  }
};

export const editarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    res.status(200).json({ mensaje: "Usuario actualizado", usuario });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ mensaje: error.message });
    }
    res.status(500).json({ mensaje: "Error al editar el usuario" });
  }
};

export const borrarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    res.status(200).json({ mensaje: "Usuario borrado" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al borrar el usuario" });
  }
};
