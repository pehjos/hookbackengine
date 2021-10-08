import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  accountType: { type: String },
 status: { type: String },
 profileImg: { type: String },
 Tracks: {
  type: [String],
  default:[],
},

});

export default mongoose.model("User", userSchema);