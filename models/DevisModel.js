const mongoose = require('mongoose');



const devisSchema = new mongoose.Schema(

    {  
    nom : {type: String, required : true},
    prenom : {type: String, required : true},
    email : {type:String, required:true,unique:true},
    password : {type:String, required:false},
    telephone :{type:Number},
    adress : {type:String, required:true},
    motif: {type:String, required:true}, 
    Superficie :{type:Number},  
}
);

module.exports = mongoose.model('devis', devisSchema)

