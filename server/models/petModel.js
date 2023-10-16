import mongoose from "mongoose";

const petSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    breed: {
      type: String,
      required: true
    }
  }
)

export const Pet = mongoose.model('Pet', petSchema)

