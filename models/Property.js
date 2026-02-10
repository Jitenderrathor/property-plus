import { Schema, model, models } from "mongoose";
import { unique } from "next/dist/build/utils";

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    location: {
      street: String,
      city: String,
      state: String,
      zipcode: String,
    },
    beds: {
      type: Number,
      require: true,
    },
    baths: {
      type: Number,
      require: true,
    },
    square_feet: {
      type: Number,
      require: true,
    },
    amenities: [
      {
        type: String,
      },
    ],
    rates: {
      nightly: Number,
      weekly: Number,
      monthly: Number,
    },
    seller_info: {
      name: String,
      email: String,
      phone: String,
    },
    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  { timeseries: true },
);

const Property = model.Property || model("Property", PropertySchema);

export default Property;
