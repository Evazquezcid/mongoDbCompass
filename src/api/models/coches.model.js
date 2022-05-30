const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const Schema = mongoose.Schema;

const cocheSchema = new Schema ({
 modelo:{type: String, required: true},
 categoria:{type: String, required: true},
 plaza:{type:Number, required: true },
 foto:{type:String,required: true}
 
},
{ timestamps : true}
);

const Coche = mongoose.model("coches",cocheSchema);

module.exports = Coche;