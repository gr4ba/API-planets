const { Router } = require('express');
const router = Router();

const { getPlanetas, createPlanetas, getPlanetasById, updatePlanetas } = require('../controllers/index.controller')

router.get('/api/planetas', getPlanetas);
router.post('/api/planetas', createPlanetas);
router.get('/api/planetas/:id', getPlanetasById);
router.put('/api/planetas/:id', updatePlanetas);
module.exports = router;