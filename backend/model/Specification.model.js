const { Schema, default: mongoose } = require("mongoose");

const specificationSchema =Schema({
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true,
      },
      power: {
        type: Number,
        required: true,
      },
      maxSpeed: {
        type: Number,
        required: true,
      }
})

module.exports=mongoose.model("Specification",specificationSchema)