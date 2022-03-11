const mongoose = require('mongoose');



const coursSchema = new mongoose.Schema(

    {   title: { type: String,required: true},
        description: { type: String,required: true },
        date: {type: Date}, 
        image: { type: String}
    
}
);

module.exports = mongoose.model('cours', coursSchema)






