const contactShcema = require("../models/contact.model")

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 


exports.authSignUp = async (req, res) => {
    const {password,email,name,age,role} = req.body
    
    try {

        
        const found= await contactShcema.findOne({email: email})
        
        if(found){
            return res.status(400).send({msg: "user already exists"})
        }
        const user = new contactShcema(req.body)
        const salt = 10;
        const paswordHashed = bcrypt.hashSync(password, salt)
        user.password = paswordHashed
        const userId = {id: user._id}
        var token = jwt.sign(userId, process.env.PASSWORD_TOKEN);
        await user.save()
        return res.status(200).send({msg: `user ${user._id} is created successfully`,token})
    } catch (error) {
        return res.status(500).send({msg: "error"})
    }
 
}

exports.authSignIn = async(req, res) => {
    const {password,email} = req.body
    
    try {
        const userExit = await contactShcema.findOne({email: email})
        
        if(!userExit){
            return res.status(400).send({msg: "bad credentials"})
        }
        
        const passwordCorrect = bcrypt.compareSync(password, userExit.password)
        
        if(!passwordCorrect){
            return res.status(400).send({msg: "bad credentials"})
        }
        
        const userId = {id: userExit._id} 
        var token = jwt.sign(userId, process.env.PASSWORD_TOKEN);
        return res.status(200).send({msg: `user ${userExit._id} is logged`,token})

    } catch (error) {
        return res.status(500).send({msg: "error!!!"}) 
    }

}
