import mongoose from "mongoose";
import dotenv from "dotenv";
import { MONGO_URL } from "./config.js";

dotenv.config();

const bdConfig = {};

const initMongoDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, bdConfig);
        console.log("Conectado con Base de Datos MongoDB");
    } catch (error) {
        console.error("Error al conectar con la base de datos Mongo mediante Mongoose", error);
        throw new Error(error);
    }
};

export default initMongoDB;
