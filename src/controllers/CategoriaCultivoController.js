import CategoriaCultivo from "../models/CategoriaCultivo";
import { getPagination } from "../libs/getPagination";

//get
export const findAllCategoriaCultivos = async (req, res) => {
    try {
  
      const { size, page } = req.query;
      const { limit, offset } = getPagination(page, size);
      const categoriacultivos = await CategoriaCultivo.paginate({}, { offset, limit });
      res.json(categoriacultivos);
  
    } catch (error) {
  
      res.status(500).json({
        message: error.message || "Something goes wrong",
        
      });
    }
  };
  
export const findOneCategoriaCultivo = async (req, res) => {
const { id } = req.params;
try {
    const categoriacultivo = await CategoriaCultivo.findById(id);
    if (!categoriacultivo) {
    return res
        .status(404)
        .json({ message: `Cultivo con id ${id} no existe` });
    }
    res.json(categoriacultivo);
} catch (error) {
    res.status(500).json({
    message: error.message || "Something goes wrong",
    });
}
};
  
  //POST
  export const createCategoriaCultivo = async (req, res) => {
    if (!req.body.cat_cul_name_go) {
      return res.status(400).send({ message: "Content cannot be empty" });
    }
    try {
      const newCategoriaCultivo = new CategoriaCultivo({
        cat_cul_name_go: req.body.cat_cul_name_go,
        cat_cul_description_go: req.body.cat_cul_description_go,
        cat_cul_totalcultivos_go: req.body.cat_cul_totalcultivos_go,
        cat_cul_imagen_go: req.body.cat_cul_imagen_go,
        cat_cul_href_go: req.body.cat_cul_href_go
      });
      const categoriacultivoSaved = await newCategoriaCultivo.save();
      res.json(categoriacultivoSaved);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Something goes wrong",
      });
    }
  };
  
//DELETE
export const deleteCategoriaCultivo = async (req, res) => {
    try {
        await CategoriaCultivo.findByIdAndDelete(req.params.id);
        res.json({
        message: "Categoria Cultivo was deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
        message: error.message || "Something goes wrong",
        });
    }
};
  
  //PUT
  export const updateCategoriaCultivo = async (req, res) => {
    try {
      await CategoriaCultivo.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false,
      });
      res.json({ message: "Categoria Cultivo was updated Successfully" });
    } catch (error) {
      res.status(500).json({
        message: "Something goes wrong",
      });
    }
  };