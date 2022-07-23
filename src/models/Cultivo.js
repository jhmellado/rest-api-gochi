import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const cultivoSchema = new Schema({
    cul_name_go: String,
    cul_cientifico_name_go: String,
    cul_categoria_go: String,
    cul_como_cultivar_go: { cul_maceta_tamano_go: Number,
        cul_suelo_tipo_go: String,
        cul_termico_piso_go: String,
        cul_max_temp_go: Number,
        cul_min_temp_go: Number,
        cul_riego_cantidad_go: String,
        cul_solar_luz_go: String,
        cul_maxima_altura_go: Number,
        cul_sembrar_profundidad_go: Number,
        cul_planta_separacion_go: Number
    },
    cul_fertilizante_go: String,
    cul_icon_go: String,
    cul_description_go: String
}, {
    versionKey: false,
    timestamps: true
});

cultivoSchema.plugin(mongoosePaginate);
export default model('Gochi_cultivo_collection',cultivoSchema)