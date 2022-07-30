import {Router} from 'express';
import * as cultivoController from '../controllers/CultivoController'
const router = Router();


router.get('/', cultivoController.findAllCultivos);

router.get('/Frutal',cultivoController.findAllFrutalCategory);

router.get('/:id',cultivoController.findOneCultivo);

router.post('/', cultivoController.createCultivo);

router.delete('/:id',cultivoController.deleteCultivo);

router.put('/:id',cultivoController.updateCultivo); 


export default router;