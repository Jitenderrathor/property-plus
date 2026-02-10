import { Schema, model, models } from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      require: [true, "Email is required"],
    },
    username: {
      type: String,
      require: [true, "Username is required"],
    },
    image: {
      type: String,
    },
    bookmark: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  { timeseries: true },
);

const User = model.User || model("User", UserSchema);

export default User;
