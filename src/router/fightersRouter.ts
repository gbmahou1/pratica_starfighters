import { Router } from 'express';
import { createBattle, getRanking } from '../controllers/fighterController';

const fighterRouter = Router()

fighterRouter.post('/battle', fighterController.createBattle)
fighterRouter.get('/ranking', fighterController.getRanking)

export default fighterRouter;