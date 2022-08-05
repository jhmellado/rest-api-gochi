import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const recopilacionSchema = new Schema(
  {
    reco_name_go: String,
    reco_imagen_go: String,
    reco_category_go: [Schema.Types.Mixed],
    reco_about_go: String,
    reco_description_go: String,
    reco_instructor_go: {
      name: String,
      email: String,
      oficio: String,
      url_profile_image: String,
      socialmedia: [Schema.Types.Mixed],
    },
    reco_secciones_go: [Schema.Types.Mixed],
    reco_publicidad_go: [Schema.Types.Mixed],
    reco_comentarios_go: [Schema.Types.Mixed]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

recopilacionSchema.plugin(mongoosePaginate);
export default model("gochi_recopilacion_collection", recopilacionSchema);
