import {Router} from 'express';
import * as cultivoController from '../controllers/CultivoController'
const router = Router();


router.get('/', cultivoController.findAllCultivos);

router.get('/Frutales',cultivoController.findAllFrutalCategory);

router.get('/Vegetales',cultivoController.findAllVegetalCategory);

router.get('/Florales',cultivoController.findAllFloralesCategory);

router.get('/Especias',cultivoController.findAllEspeciasCategory);

router.get('/Aromaticas',cultivoController.findAllAromaticasCategory);

router.get('/Suculentas',cultivoController.findAllSuculentasCategory);

router.get('/:id',cultivoController.findOneCultivo);

router.post('/', cultivoController.createCultivo);

router.delete('/:id',cultivoController.deleteCultivo);

router.put('/:id',cultivoController.updateCultivo); 


export default router;