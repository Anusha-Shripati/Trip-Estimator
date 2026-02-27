import jwt from "jsonwebtoken";
// const secret = "Admin@111$7";
const dummy_user = {
  email: "abc@gmail.com",
  password: 11111,
};

export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "5m" });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    throw new Error("Invalid token");
  }
};
