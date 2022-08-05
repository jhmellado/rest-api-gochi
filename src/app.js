import express from "express";
import morgan from "morgan";
import cors from 'cors';

import indexRoutes from "./routes/index.routes";
import cultivosRoutes from "./routes/cultivos.routes";
import categoriacultivosRoutes from "./routes/categoriacultivos.routes";
import usuariosRoutes from "./routes/usuarios.routes";
import recopilacionesRoutes from "./routes/recopilaciones.routes";

const app = express();

//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/",indexRoutes)
app.use("/cultivos/",cultivosRoutes);
app.use("/categorias/",categoriacultivosRoutes);
app.use("/usuarios/",usuariosRoutes);
app.use("/recopilations/",recopilacionesRoutes);

export default app;
