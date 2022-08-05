import Usuario from "../models/Usuario";
import { getPagination } from "../libs/getPagination";

//get
export const findAllUsuarios = async (req, res) => {
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);
    const usuarios = await Usuario.paginate({}, { offset, limit });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong",
    });
  }
};

export const findOneUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findById(id);
    if (!usuario) {
      return res
        .status(404)
        .json({ message: `Usuario con id ${id} no existe` });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong",
    });
  }
};

//POST
export const createUsuario = async (req, res) => {
  if (!req.body.user_username_go) {
    return res.status(400).send({ message: "Content cannot be empty" });
  }
  try {
    const newUsuario = new Usuario({
      user_username_go: req.body.user_username_go,
      user_nombre_go: req.body.user_nombre_go,
      user_apellido_go: req.body.user_apellido_go,
      user_email_go: req.body.user_email_go,
      user_imagen_perfil_go: req.body.user_imagen_perfil_go,
      user_recopilaciones_go: req.body.user_recopilaciones_go,
      user_cultivos_go: req.body.user_cultivos_go,
      user_cursos_go: req.body.user_cursos_go,
    });
    const usuarioSaved = await newUsuario.save();
    res.json(usuarioSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong",
    });
  }
};

//DELETE
export const deleteUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({
      message: "Usuario was deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong",
    });
  }
};

//PUT
export const updateUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    });
    res.json({ message: "Usuario was updated Successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
