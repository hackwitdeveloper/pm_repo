const PatientModel = require("../model/user_model");

class PatientServices{
    static async registerPatient(fname,lname,dob,gender,email,phone,address,state,postcode,password){
        try{
            const createPatient = new PatientModel({fname,lname,dob,gender,email,phone,address,state,postcode,password});
            return await createPatient.save();
        }catch(err){
            throw err;
        }
    }
}
module.exports = PatientServices;