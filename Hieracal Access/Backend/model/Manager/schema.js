const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role : {
        type : String,
        enam : ["Admin","Manager","Emaploee"],
        required : true
    }
});

const firstSchema = mongoose.model("Manager-Detail", schema);

module.exports = firstSchema;