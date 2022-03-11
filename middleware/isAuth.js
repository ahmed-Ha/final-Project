
const contactsSchema = require('../models/contact.model')
const jwt = require('jsonwebtoken');


exports.isAuth = async (req, res,next) => {
    console.log(req)
    const token = req.header('authorization');
    
     try {
         if(!token) {
             return res.status(400).send({msg:'not autorized'})
         }
         const decoded = jwt.verify(token,process.env.PASSWORD_TOKEN);
           if(!decoded){
               return res.status(400).send({msg:'not autorized'})
           }
           const user = await contactsSchema.findById(decoded.id)
           req.user = user;
           next(); 
     } catch (error) {
         return res.status(500).send({msg: error})
     } 
}

