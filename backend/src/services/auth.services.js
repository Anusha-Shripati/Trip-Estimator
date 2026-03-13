import Auth from "../models/user.model.js";
import { comparePassword, hashPassword } from "../utils/passwordHashing.js";
import { generateToken } from "../utils/jwt.js";
export const signupService = async (userData, file) => {
  const { fullName, email, password } = userData;
  const profileImage = file ? file.filename : null;
  const existingUser = await Auth.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  const existingFullName = await Auth.findOne({ fullName });
  if (existingFullName) {
    throw new Error("FullName is already exists");
  }
  const hashed = await hashPassword(password);

  const newUser = await Auth.create({
    ...userData,
    password: hashed,
    profileImage: profileImage,
  });

  return newUser;
};

export const signinService = async (userData) => {
  const { email, password } = userData;
  const user = await Auth.findOne({ email }).select("+password");
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const isMatchPassword = await comparePassword(password, user.password);
  if (!isMatchPassword) {
    throw new Error("Invalid email or password");
  }
  const token = generateToken({ id: user._id, email: user.email });
  return { user, token };
};
