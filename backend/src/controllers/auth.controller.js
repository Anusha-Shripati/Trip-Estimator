import { signinService, signupService } from "../services/auth.services.js";
import { generateToken } from "../utils/jwt.js";

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
    const { user, token, refreshToken } = result;
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "none",
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ message: "Login succesfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const logoutController = (req, res) => {
  res.clearCookie("token");
  res.clearCookie("refreshToken");
  res.status(200).json({ message: "Logout successfully" });
};

export const refreshTokenController = (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token" });
  }

  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_JWT_SECRET_KEY,
    );

    const newAccessToken = generateToken({
      id: decoded.id,
    });

    res.cookie("token", newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 15 * 60 * 1000,
    });

    res.json({ message: "Token refreshed" });
  } catch {
    res.status(403).json({ message: "Invalid refresh token" });
  }
};
