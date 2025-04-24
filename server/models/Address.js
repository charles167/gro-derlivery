import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  country: { type: String, required: true },
  zipcode: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  email: { type: String, required: true },
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }, // ✅ add this
});


const Address = mongoose.model.Address || mongoose.model('address',addressSchema)

export default Address