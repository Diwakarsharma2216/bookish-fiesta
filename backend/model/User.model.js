const { Schema, model } = require("mongoose");

const userSchema=Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      }
})

const UserModel=model("User",userSchema)

module.exports={UserModel}