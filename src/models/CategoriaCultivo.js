import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const categoriacultivoSchema = new Schema({
    cat_cul_name_go: String,
    cat_cul_description_go: String,
    cat_cul_totalcultivos_go: Number,
    cat_cul_imagen_go: String,
    cat_cul_href_go: String
}, {
    versionKey: false,
    timestamps: true
});

categoriacultivoSchema.plugin(mongoosePaginate);
export default model('gochi_categoriacultivo_collection',categoriacultivoSchema)