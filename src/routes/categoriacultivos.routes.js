import {Router} from 'express';
import * as categoriacultivoController from '../controllers/CategoriaCultivoController';
const router = Router();

router.get('/', categoriacultivoController.findAllCategoriaCultivos);

router.get('/:id',categoriacultivoController.findOneCategoriaCultivo);

router.post('/', categoriacultivoController.createCategoriaCultivo);

router.delete('/:id',categoriacultivoController.deleteCategoriaCultivo);

router.put('/:id',categoriacultivoController.updateCategoriaCultivo); 

export default router;