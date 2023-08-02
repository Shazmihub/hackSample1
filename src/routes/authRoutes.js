import express from "express";
import authService from "../services/authService.js";
import HttpStatus from "../enums/httpStatus.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
  const data = req.body;
  const response = await authService.signUp(data);

  if (response.status == HttpStatus.FORBIDDEN) {
    res.status(response.status).json({ message: "Invalid Credentials" });
  } else {
    res.status(response.status).json(response);
  }
});

router.post("/login", async (req, res) => {
  const data = req.body;
  const response = await authService.login(data);

  if (response.status == HttpStatus.NOT_FOUND) {
    res.status(200).json({ message: "User Not Found" });
  } else if (response.status == HttpStatus.FORBIDDEN) {
    res.status(200).json({ message: "Password Mismatch" });
  } else {
    res.status(response.status).json(response);
  }
});

export default router;