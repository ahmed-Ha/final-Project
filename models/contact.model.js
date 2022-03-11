const mongoose = require('mongoose');




const contactSchema = new mongoose.Schema(
    {
      nom : {type: String, required : true},
      prenom : {type: String, required : true},
      adress : {type:String, required:true},
      email : {type:String, required:true,unique:true},
      password : {type:String, required:true},
      postal :{type:Number},
      telephone :{type:Number},
      ville : {type:String}, 
      role : {type:String, default:'user'}

    }
)
  
module.exports = mongoose.model('Contact',contactSchema); 