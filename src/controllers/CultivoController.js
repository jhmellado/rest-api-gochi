import Cultivo from "../models/Cultivo";
import { getPagination } from "../libs/getPagination";

//get
export const findAllCultivos = async (req, res) => {
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);
    const cultivos = await Cultivo.paginate({}, { offset, limit });
    res.json(cultivos);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong",
    });
  }
};

export const findOneCultivo = async (req, res) => {
  const { id } = req.params;
  try {
    const cultivo = await Cultivo.findById(id);
    if (!cultivo) {
      return res
        .status(404)
        .json({ message: `Cultivo con id ${id} no existe` });
    }
    res.json(cultivo);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong",
    });
  }
};

export const findAllFrutalCategory = async (req, res) => {
  try {
    const allFrutal = await Cultivo.find({ cul_categoria_go: "Frutales" });
    res.json(allFrutal);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong",
    });
  }
};

//POST
export const createCultivo = async (req, res) => {
  if (!req.body.cul_name_go) {
    return res.status(400).send({ message: "Content cannot be empty" });
  }
  try {
    const newCultivo = new Cultivo({
      cul_name_go: req.body.cul_name_go,
      cul_cientifico_name_go: req.body.cul_cientifico_name_go,
      cul_categoria_go: req.body.cul_categoria_go,
      cul_icon_go: req.body.cul_icon_go,
      cul_banner_go: req.body.cul_banner_go,
      cul_description_go: req.body.cul_description_go,
      cul_info_nutricional_go: {
        cul_beneficios_go: req.body.cul_info_nutricional_go.cul_beneficios_go,
        cul_contraindicaciones_go:
          req.body.cul_info_nutricional_go.cul_contraindicaciones_go,
        cul_porcion_go: req.body.cul_info_nutricional_go.cul_porcion_go,
        cul_energia_go: {
          cul_cien_go:
            req.body.cul_info_nutricional_go.cul_energia_go.cul_cien_go,
          cul_porcion_go:
            req.body.cul_info_nutricional_go.cul_energia_go.cul_porcion_go,
        },
        cul_proteinas_go: {
          cul_cien_go:
            req.body.cul_info_nutricional_go.cul_proteinas_go.cul_cien_go,
          cul_porcion_go:
            req.body.cul_info_nutricional_go.cul_proteinas_go.cul_porcion_go,
        },
        cul_grasa_total_go: {
          cul_cien_go:
            req.body.cul_info_nutricional_go.cul_grasa_total_go.cul_cien_go,
          cul_porcion_go:
            req.body.cul_info_nutricional_go.cul_grasa_total_go.cul_porcion_go,
        },
        cul_carbohidratos_go: {
          cul_cien_go:
            req.body.cul_info_nutricional_go.cul_carbohidratos_go.cul_cien_go,
          cul_porcion_go:
            req.body.cul_info_nutricional_go.cul_carbohidratos_go
              .cul_porcion_go,
        },
        cul_fibra_dietetica_go: {
          cul_cien_go:
            req.body.cul_info_nutricional_go.cul_fibra_dietetica_go.cul_cien_go,
          cul_porcion_go:
            req.body.cul_info_nutricional_go.cul_fibra_dietetica_go
              .cul_porcion_go,
        },
        cul_sodio_go: {
          cul_cien_go:
            req.body.cul_info_nutricional_go.cul_sodio_go.cul_cien_go,
          cul_porcion_go:
            req.body.cul_info_nutricional_go.cul_sodio_go.cul_porcion_go,
        },
        cul_potasio_go: {
          cul_cien_go:
            req.body.cul_info_nutricional_go.cul_potasio_go.cul_cien_go,
          cul_porcion_go:
            req.body.cul_info_nutricional_go.cul_potasio_go.cul_porcion_go,
        },
        cul_vitaminas_go: {
          cul_vit_a_go: {
            cul_cien_go:
              req.body.cul_info_nutricional_go.cul_vitaminas_go.cul_vit_a_go
                .cul_cien_go,
            cul_porcion_go:
              req.body.cul_info_nutricional_go.cul_vitaminas_go.cul_vit_a_go
                .cul_porcion_go,
          },
          cul_vit_c_go: {
            cul_cien_go:
              req.body.cul_info_nutricional_go.cul_vitaminas_go.cul_vit_c_go
                .cul_cien_go,
            cul_porcion_go:
              req.body.cul_info_nutricional_go.cul_vitaminas_go.cul_vit_c_go
                .cul_porcion_go,
          },
          cul_vit_e_go: {
            cul_cien_go:
              req.body.cul_info_nutricional_go.cul_vitaminas_go.cul_vit_e_go
                .cul_cien_go,
            cul_porcion_go:
              req.body.cul_info_nutricional_go.cul_vitaminas_go.cul_vit_e_go
                .cul_porcion_go,
          },
          cul_acido_folico_go: {
            cul_cien_go:
              req.body.cul_info_nutricional_go.cul_vitaminas_go
                .cul_acido_folico_go.cul_cien_go,
            cul_porcion_go:
              req.body.cul_info_nutricional_go.cul_vitaminas_go
                .cul_acido_folico_go.cul_porcion_go,
          },
          cul_calcio_go: {
            cul_cien_go:
              req.body.cul_info_nutricional_go.cul_vitaminas_go.cul_calcio_go
                .cul_cien_go,
            cul_porcion_go:
              req.body.cul_info_nutricional_go.cul_vitaminas_go.cul_calcio_go
                .cul_porcion_go,
          },
          cul_hierro_go: {
            cul_cien_go:
              req.body.cul_info_nutricional_go.cul_vitaminas_go.cul_hierro_go
                .cul_cien_go,
            cul_porcion_go:
              req.body.cul_info_nutricional_go.cul_vitaminas_go.cul_hierro_go
                .cul_porcion_go,
          },
        },
      },
      cul_cuando_cultivar_go: {
        cul_germina_en_go: req.body.cul_cuando_cultivar_go.cul_germina_en_go,
        cul_cosechar_en_go: req.body.cul_cuando_cultivar_go.cul_cosechar_en_go,
        cul_temporada_siembra_go:
          req.body.cul_cuando_cultivar_go.cul_temporada_siembra_go,
      },
      cul_como_cultivar_go: {
        cul_tamano_maceta_go:
          req.body.cul_como_cultivar_go.cul_tamano_maceta_go,
        cul_espacio_maceta_go:
          req.body.cul_como_cultivar_go.cul_espacio_maceta_go,
        cul_transplantar_go: req.body.cul_como_cultivar_go.cul_transplantar_go,
        cul_plantar_casa_go: req.body.cul_como_cultivar_go.cul_plantar_casa_go,
        cul_termico_piso_go: req.body.cul_como_cultivar_go.cul_termico_piso_go,
        cul_max_temp_go: req.body.cul_como_cultivar_go.cul_max_temp_go,
        cul_min_temp_go: req.body.cul_como_cultivar_go.cul_min_temp_go,
        cul_riego_cantidad_go:
          req.body.cul_como_cultivar_go.cul_riego_cantidad_go,
        cul_solar_luz_go: req.body.cul_como_cultivar_go.cul_solar_luz_go,
        cul_maxima_altura_go:
          req.body.cul_como_cultivar_go.cul_maxima_altura_go,
        cul_sembrar_profundidad_go:
          req.body.cul_como_cultivar_go.cul_sembrar_profundidad_go,
        cul_planta_separacion_go:
          req.body.cul_como_cultivar_go.cul_planta_separacion_go,
        cul_suelo_tipo_go: req.body.cul_como_cultivar_go.cul_suelo_tipo_go,
        cul_ph_suelo_go: req.body.cul_como_cultivar_go.cul_ph_suelo_go,
        cul_tipo_luna_go: req.body.cul_como_cultivar_go.cul_tipo_luna_go,
      },
      cul_buenos_vecinos_go: req.body.cul_buenos_vecinos_go,
      cul_malos_vecinos_go: req.body.cul_malos_vecinos_go,
      cul_fertelizantes_go: req.body.cul_fertelizantes_go,
      cul_plagas_comunes_go: req.body.cul_plagas_comunes_go,
      cul_metodo_reproduccion_go: req.body.cul_metodo_reproduccion_go,
      cul_publicidad_go: req.body.cul_publicidad_go,
      cul_archivos_go: req.body.cul_archivos_go,
      cul_comentarios_go: req.body.cul_comentarios_go
    });
    const cultivoSaved = await newCultivo.save();
    res.json(cultivoSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong",
    });
  }
};

//DELETE
export const deleteCultivo = async (req, res) => {
  try {
    await Cultivo.findByIdAndDelete(req.params.id);
    res.json({
      message: "Cultivo was deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong",
    });
  }
};

//PUT
export const updateCultivo = async (req, res) => {
  try {
    await Cultivo.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    });
    res.json({ message: "Cultivo was updated Successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
