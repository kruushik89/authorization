const {Schema, model} = require("mongoose");

//Описує які поля буде мати сущность користувача
const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean,default: false},
    activationLink: {type: String},
})

module.exports = model("User", UserSchema)