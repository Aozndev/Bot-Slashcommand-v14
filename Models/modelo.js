const { model, Schema } = require("mongoose");
const moment = require("moment");

let modeloSchema = new Schema({
    
    _id: { type: String, required: true },
    userId: {type: String, required: true},
});

module.exports = model("modelo", modeloSchema);