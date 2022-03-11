const devisShcema = require("../models/DevisModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.addDevis = async (req, res) => {
    const {nom, prenon, telephone, password, email, adresse, superficie, motif} = req.body
    try {
        const addDevis = new devisShcema(req.body)
        await addDevis.save()
        return res.status(200).send({msg: ' person who choose an offer added successfully'})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: "could not SAVE"})
    }
}


exports.afficheDevis = async (req, res) => {
    try {
       const Persons =  await devisShcema.find();
        return res.status(200).send({msg:"list",Persons});
    } catch (error) {
        return res.status(500).send({msg: "could not list"})
    }
}
