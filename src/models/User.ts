import mongoose, { Document, Schema, Model } from "mongoose";
// Giao diện TypeScript cho User
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
// Định nghĩa schema Mongoose
const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    collection: "Users",
    timestamps: true,
  }
);
// Tạo và export model
const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
export default User;
