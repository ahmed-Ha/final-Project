const express = require('express');
const auth = express.Router();


const {authSignUp,authSignIn} = require("../controllers/contact.controller");
const { isAuth } = require('../middleware/isAuth');
const {isValid,validationSignUp,validationSignIn} = require('../middleware/validation')
const {addNewCours,afficheCours,deleteCours} = require('../controllers/cours.controller')
const {addDevis,afficheDevis} = require('../controllers/devis.controllers')



auth.post('/signUp',validationSignUp,isValid ,authSignUp )
auth.post('/signin',validationSignIn, isValid,authSignIn)
auth.get('/current', isAuth, (req,res) =>{
    res.send(req.user)
});
auth.post('/addNewCours', addNewCours)
auth.get('/afficheCours', afficheCours)
auth.delete('/cours/:ID', deleteCours)
auth.post('/addDevis',addDevis)
auth.get('/afficheDevis',afficheDevis)





module.exports = auth;





