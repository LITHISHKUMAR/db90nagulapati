const mongoose = require("mongoose") 
const vanSchema = mongoose.Schema({ 
 Name: String, 
 Brand: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("Van", 
vanSchema)