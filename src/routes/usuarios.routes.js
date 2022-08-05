import {Router} from 'express';
import * as usuarioController from '../controllers/UsuarioController';
const router = Router();

router.get('/', usuarioController.findAllUsuarios);

router.get('/:id',usuarioController.findOneUsuario);

router.post('/', usuarioController.createUsuario);

router.delete('/:id',usuarioController.deleteUsuario);

router.put('/:id',usuarioController.updateUsuario); 

export default router;