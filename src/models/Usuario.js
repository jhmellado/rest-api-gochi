import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const usuarioSchema = new Schema(
  {
    user_username_go: String,
    user_nombre_go: String,
    user_apellido_go: String,
    user_email_go: String,
    user_imagen_perfil_go: String,
    user_recopilaciones_go: [Schema.Types.Mixed],
    user_cultivos_go: [Schema.Types.Mixed],
    user_cursos_go: [Schema.Types.Mixed]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

usuarioSchema.plugin(mongoosePaginate);
export default model("gochi_usuario_collection", usuarioSchema);