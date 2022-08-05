import {Router} from 'express';
import * as recopilacionController from '../controllers/RecopilacionController';
const router = Router();

router.get('/', recopilacionController.findAllRecopilaciones);

router.get('/:id',recopilacionController.findOneRecopilacion);

router.post('/', recopilacionController.createRecopilacion);

router.delete('/:id',recopilacionController.deleteRecopilacion);

router.put('/:id',recopilacionController.updateRecopilacion); 

export default router;