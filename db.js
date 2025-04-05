require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.mongoURL);
const Schema = mongoose.Schema;
const Object_Id = mongoose.Types.ObjectId;

const userSchema = new Schema({
  email: { type: string, required: true, unique: true },
  pasword: { type: string, required: true },
  firstname: { type: string, required: true },
  lastname: { type: string, required: true },
});

const adminSchema = new Schema({
  email: { type: string, required: true, unique: true },
  pasword: { type: string, required: true },
  firstname: { type: string, required: true },
  lastname: { type: string, required: true },
});

const couresSchema = new Schema({
  title: { types: string, required: true },
  descriptiom: { type: string, required: true },
  price: { type: number, required: true },
  imageURL: string,
  creatorId: Object_Id,
});

const purchaseSchema = new Schema({
  userId: Object_Id,
  courseId: Object_Id,
});

const userModel = mongoose.model('user', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('course', couresSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
