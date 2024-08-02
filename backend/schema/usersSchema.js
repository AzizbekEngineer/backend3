import mongoose from "mongoose";
import Joi from "joi";

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  budget: {
    type: Number,
    default: 0,
  },
});

export const Users = mongoose.model("user", userSchema);

export const validationUser = (body) => {
  let schema = Joi.object({
    fname: Joi.string().required(),
    lname: Joi.string().allow(""),
    username: Joi.string().required().min(3).max(15),
    password: Joi.string().required().min(3).max(15),
    age: Joi.number().required(),
    url: Joi.string().required(),
    gender: Joi.string().required(),
    isActive: Joi.boolean().required(),
    budget: Joi.number().allow(0),
  });
  return schema.validate(body);
};
