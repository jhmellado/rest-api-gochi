import express from "express";
import morgan from "morgan";
import cors from 'cors';

import cultivosRoutes from "./routes/cultivos.routes";

const app = express();

//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//middlewares
app.use(cors({
    origin: 'http://localhost'
}))
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/api/cultivos/", cultivosRoutes);

export default app;
