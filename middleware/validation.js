// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');



exports.validationSignUp = [
    //   body('name', 'the name must containt at least 5 one character').isEmpty().isLength({min:5}),
      body('password','the password must containt at least 5 one character').isEmpty().isLength({min:5}),
      body('email','the email must be email format').isEmpty().isEmail(),

]


exports.validationSignIn = [
    body('password','the password must containt at least 5 one character').isEmpty().isLength({min:5}),
    body('email','the email must be email format').isEmpty().isEmail(),
    
]

exports.isValid = async (req, res, next) => {


      try {
        const errors = validationResult(req.body);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      } catch (error) {
          return res.status(500).send({msg: error})
      }
}