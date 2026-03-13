import { signinService, signupService } from "../services/auth.services.js";

export const signupController = async (req, res) => {
  try {
    const result = await signupService(req.body, req.file);
    res
      .status(201)
      .json({ message: "User signed-up successfully ", user: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const signinController = async (req, res) => {
  try {
    const result = await signinService(req.body);
    res.status(200).json({ message: "Login succesfully", ...result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
