import {Router} from 'express';
import { userRegister, userLogin, userLogout } from '../controllers/authController.js';

const router = Router();

// Ruta para registrar un nuevo usuario
router.post('/register', userRegister);

// Ruta para iniciar sesión
router.post('/login', userLogin);

// Ruta para cerrar sesión
router.post('/logout', userLogout);

export default router;
