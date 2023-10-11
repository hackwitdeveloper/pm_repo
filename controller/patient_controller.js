const PatientServices = require("../services/patient_services")

exports.register = async(req, res, next)=>{
    try{
        const{fname,lname,dob,gender,email,phone,address,state,postcode,password} = req.body;

        const successRes = await PatientServices.registerPatient(fname,lname,dob,gender,email,phone,address,state,postcode,password);

        res.json({status: true, success: "Patient Registred Successfully"});

    }catch(error){
        throw error
    }
}