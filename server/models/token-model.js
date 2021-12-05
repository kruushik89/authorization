const {Schema, model} = require("mongoose");

//Описує які поля буде мати сущность користувача
const TokenSchema = new Schema({
    email: {type: Schema.Types.ObjectId, ref: "User"},
    activationLink: {type: String, required: true},
})

module.exports = model("Token", TokenSchema)