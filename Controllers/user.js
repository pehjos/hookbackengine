import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';
import UserModal from "../models/user.js";
// import PostMessage from '../models/postMessage.js';
const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "2000h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName,profileImg,accountType,Tracks,status } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, profileImg,status,Tracks,accountType,password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "2000h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

export const userStatus = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  
  const user = await UserModal.findById(id);

  const updateUser = await UserModal.findByIdAndUpdate(id, { status:"prime" }, { new: true });
  
  res.json(updateUser);


  
}
// export const userImg = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  
//   const user = await UserModal.findById(id);

//   const updateImg = await UserModal.findByIdAndUpdate(id, { profileImg:user.profileImg }, { new: true });
  
//   res.json(updateImg);
//   console.log("sucess")

  
// }
export const userImg = async (req, res) => {
  const { id } = req.params;
  const { email, password, firstName, lastName,profileImg,accountType,Tracks,status  } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updateImg = { profileImg , _id: id };

  await UserModal.findByIdAndUpdate(id, updateImg, { new: true });

  res.json(updateImg);
}





