const mongoose = require("mongoose");
const  schema = mongoose.Schema({
    book: {
        type : String,
        require:true,
    },
    author:{
        type:String,
        require:true,
    },
    price: {
        type:String,
        require:true,
    },
    date:{
        type:String,
        require:true,

    },
    image: {
        type:String,
        require:true,
    }

})

const firstSchema = mongoose.model("Student",schema);

module.exports = firstSchema;