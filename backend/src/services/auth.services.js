import Auth from "../models/user.model.js";
import hashPassword from "../utils/hashPassword.js";
import { generateToken } from "../utils/jwt.js";
export const signupService = async (userData) => {
  const { username, email, password } = userData;

  const existingUser = await Auth.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  const existingUserName = await Auth.findOne({ username });
  if (existingUserName) {
    throw new Error("UserName is already exists");
  }
  const hashed = await hashPassword(password);

  const newUser = await Auth.create({
    ...userData,
    password: hashed,
  });

  return newUser;
};

export const signinService = async (userData) => {
  const { email, password } = userData;
  const user = await Auth.findOne({ email }).select("+password");
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const isMatchPassword = await hashPassword.comparePassword(
    password,
    user.password,
  );
  if (!isMatchPassword) {
    throw new Error("Invalid email or password");
  }
  const token = generateToken({ id: user._id, email: user.email });
  return { token };
};
