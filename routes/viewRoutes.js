const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');

router.get('/', viewController.renderDashboard);
router.get('/form', viewController.renderForm);

module.exports = router;