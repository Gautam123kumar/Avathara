const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    
        username: { type: String, default: "" },
        email: { type: String, default: "", index: true },
        phoneNo: { type: String, default: "" },
  
},{Timestamp:true})
  

const users = mongoose.model("User",userSchema);
module.exports = users;