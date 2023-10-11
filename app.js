const express = require(`express`);
const body_parser = require('body-parser');
const patientRouter = require('./routers/patient_router');


const app = express();
app.use(body_parser.json());
app.use('/',patientRouter);

module.exports =app;