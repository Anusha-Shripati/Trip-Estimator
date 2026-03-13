import Joi from "joi";

export const signupSchema = Joi.object({
  fullName: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(2).max(10).required(),
  profileImage: Joi.any().optional(),
});
