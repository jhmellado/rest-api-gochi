import Recopilacion from "../models/Recopilacion";
import { getPagination } from "../libs/getPagination";

//get
export const findAllRecopilaciones = async (req, res) => {
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);
    const recopilaciones = await Recopilacion.paginate({}, { offset, limit });
    res.json(recopilaciones);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong",
    });
  }
};

export const findOneRecopilacion = async (req, res) => {
  const { id } = req.params;
  try {
    const recopilacion = await Recopilacion.findById(id);
    if (!recopilacion) {
      return res
        .status(404)
        .json({ message: `Gochivideos con id ${id} no existe` });
    }
    res.json(recopilacion);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong",
    });
  }
};

//POST
export const createRecopilacion = async (req, res) => {
  if (!req.body.reco_name_go) {
    return res.status(400).send({ message: "Content cannot be empty" });
  }
  try {
    const newRecopilacion = new Recopilacion({
      reco_name_go: req.body.reco_name_go,
      reco_imagen_go: req.body.reco_imagen_go,
      reco_category_go: req.body.reco_category_go,
      reco_about_go: req.body.reco_about_go,
      reco_description_go: req.body.reco_description_go,
      reco_instructor_go: {
        name: req.body.reco_instructor_go.name,
        email: req.body.reco_instructor_go.email,
        oficio: req.body.reco_instructor_go.oficio,
        url_profile_image: req.body.reco_instructor_go.url_profile_image,
        socialmedia: req.body.reco_instructor_go.socialmedia
      },
      reco_secciones_go: req.body.reco_secciones_go,
      reco_publicidad_go: req.body.reco_publicidad_go,
      reco_comentarios_go: req.body.reco_comentarios_go,
    });
    const recopilacionSaved = await newRecopilacion.save();
    res.json(recopilacionSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong",
    });
  }
};

//DELETE
export const deleteRecopilacion = async (req, res) => {
  try {
    await Recopilacion.findByIdAndDelete(req.params.id);
    res.json({
      message: "Recopilacion was deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong",
    });
  }
};

//PUT
export const updateRecopilacion = async (req, res) => {
  try {
    await Recopilacion.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    });
    res.json({ message: "Recopilacion was updated Successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
