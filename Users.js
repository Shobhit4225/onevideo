const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    name: {
        type : String,
        require : true,
    },
    age: {
        type : Number,
        require : true,
    },
    username : {
        type : String,
        required : true,
    },
});

const UserModel = mongoose.model("users" , UsersSchema)
module.exports = UserModel