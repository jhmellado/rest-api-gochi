import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const cultivoSchema = new Schema(
  {
    cul_name_go: String,
    cul_cientifico_name_go: String,
    cul_categoria_go: String,
    cul_icon_go: String,
    cul_banner_go: String,
    cul_description_go: String,
    cul_info_nutricional_go: {
      cul_beneficios_go: [Schema.Types.Mixed],
      cul_contraindicaciones_go: [Schema.Types.Mixed],
      cul_porcion_go: String,
      cul_energia_go: {
        cul_cien_go: String,
        cul_porcion_go: String
      },
      cul_proteinas_go: {
        cul_cien_go: String,
        cul_porcion_go: String
      },
      cul_grasa_total_go: {
        cul_cien_go: String,
        cul_porcion_go: String
      },
      cul_carbohidratos_go: {
        cul_cien_go: String,
        cul_porcion_go: String
      },
      cul_fibra_dietetica_go: {
        cul_cien_go: String,
        cul_porcion_go: String
      },
      cul_sodio_go: {
        cul_cien_go: String,
        cul_porcion_go: String
      },
      cul_potasio_go: {
        cul_cien_go: String,
        cul_porcion_go: String
      },
      cul_vitaminas_go: {
        cul_vit_a_go: {
          cul_cien_go: String,
          cul_porcion_go: String
        },
        cul_vit_c_go: {
          cul_cien_go: String,
          cul_porcion_go: String
        },
        cul_vit_e_go: {
          cul_cien_go: String,
          cul_porcion_go: String
        },
        cul_acido_folico_go: {
          cul_cien_go: String,
          cul_porcion_go: String
        },
        cul_calcio_go: {
          cul_cien_go: String,
          cul_porcion_go: String
        },
        cul_hierro_go: {
          cul_cien_go: String,
          cul_porcion_go: String
        }
      }
    },
    cul_cuando_cultivar_go: {
      cul_germina_en_go: String,
      cul_cosechar_en_go: String,
      cul_temporada_siembra_go: String,
    },
    cul_como_cultivar_go: {
      cul_tamano_maceta_go: String,
      cul_transplantar_go: String,
      cul_plantar_casa_go: String,
      cul_termico_piso_go: String,
      cul_max_temp_go: String,
      cul_min_temp_go: String,
      cul_riego_cantidad_go: String,
      cul_solar_luz_go: String,
      cul_maxima_altura_go: String,
      cul_sembrar_profundidad_go: String,
      cul_planta_separacion_go: String,
      cul_suelo_tipo_go: String,
      cul_ph_suelo_go: String,
      cul_tipo_luna_go: String,
    },
    cul_buenos_vecinos_go: [Schema.Types.Mixed],
    cul_malos_vecinos_go: [Schema.Types.Mixed],
    cul_fertelizantes_go: [Schema.Types.Mixed],
    cul_plagas_comunes_go: [Schema.Types.Mixed],
    cul_metodo_reproduccion_go: [Schema.Types.Mixed],
    cul_publicidad_go: [Schema.Types.Mixed],
    cul_archivos_go: [Schema.Types.Mixed]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

cultivoSchema.plugin(mongoosePaginate);
export default model("gochi_cultivo_collection", cultivoSchema);
