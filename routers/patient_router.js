const router = require('express').Router();
const patientController = require('../controller/patient_controller');

router.post('/registeration',patientController.register);

module.exports = router;   