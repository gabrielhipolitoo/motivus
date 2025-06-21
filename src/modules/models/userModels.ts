import mongoose, { model, Schema, models } from "mongoose";

interface IUserModel {
  name: string;
  email: string;
  password: string;
  permission: string;
  _id: number;
}

mongoose.Promise = global.Promise;

const UserSchema = new Schema<IUserModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    permission: { type: String, required: true },
    _id: { type: Number, required: true, unique: true },
  },
  { timestamps: true }
);

export const UserModel = models.users || model("users", UserSchema);
