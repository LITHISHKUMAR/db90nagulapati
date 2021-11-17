const mongoose = require("mongoose") 
const vanSchema = mongoose.Schema({ 
 name: String, 
 brand: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("Van", 
vanSchema)