const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/status', apiController.getStatus);
router.get('/materi', apiController.getMateri);
router.get('/materi/:id', apiController.getMateriById);
router.post('/materi', apiController.createMateri);
router.put('/materi/:id', apiController.updateMateri);
router.delete('/materi/:id', apiController.deleteMateri);

module.exports = router;