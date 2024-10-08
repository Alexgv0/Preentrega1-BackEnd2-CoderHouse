import bcrypt from "bcrypt";
import { saltRounds } from "../config/config.js";

import { fileURLToPath } from 'url'; 
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const srcPath = path.resolve(__dirname, '..');

// Hashea la contraseña pasada por parametro
export const hashPassword = password => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, 10);

    return hashPassword;
};

// Compara la contraseña sin hashear con la constraseña del usuario de la base de datos (hasheada)
export const comparePasswords = (password, user) => {
    return bcrypt.compareSync(password, user.password);
};