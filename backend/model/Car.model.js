const { Schema, default: mongoose } = require("mongoose");

const carSchema=Schema({
    make:{
        type:String,
        required: true,
    },
    model: {
        type: String,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
      color: {
        type: [String],
        required: true,
      },
      mileage: {
        type: Number,
        required: true,
      },
      power: {
        type: Number,
        required: true,
      },
      maxSpeed: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      majorScratches: {
        type: Boolean,
        default: false,
      },
      originalPaint: {
        type: Boolean,
        default: true,
      },
      accidentsReported: {
        type: Number,
        default: 0,
      },
      previousBuyers: {
        type: Number,
        default: 0,
      },
      registrationPlace: {
        type: String,
        required: true,
      },
})

module.exports=mongoose.model("Car",carSchema)