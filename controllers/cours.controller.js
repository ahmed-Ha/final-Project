const coursSchema = require("../models/model_cours")

// adding new cours
exports.addNewCours = async (req, res) => {
    const {title, date, description, image} = req.body;
    try {
        const find = await coursSchema.findOne({title: title});
        if (find) {
            return res.status(400).send({msg: "this course already exist"})
        }
        const cours = new coursSchema(req.body)
        await cours.save();
        return res.status(200).send({msg: 'added successfully'})
    } catch (error) {
    }
}

exports.afficheCours = async (req, res) => {
    try {
        const Affichage = await coursSchema.find();
        return res.status(200).send({msg: "list", Affichage});
    } catch (error) {
        return res.status(500).send({msg: "could not list"})
    }
}

exports.deleteCours = async (req, res) => {
    const {ID} = req.params
    try {
        const removedCours = await coursSchema.findByIdAndDelete(ID)
        return res.status(200).send({msg: 'successfully removed cours', removedCours})
    } catch (error) {
        return res.status(500).send({msg: 'cannot be removed', error})
    }
}