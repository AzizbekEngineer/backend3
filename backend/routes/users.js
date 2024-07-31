import express from "express";
import { Users } from "../schema/usersSchema.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await Users.find();
    if (!user.length) {
      return res.status(400).json({
        msg: "Malumot topilmadi",
        variant: "error",
        payload: null,
      });
    }
    res.status(200).json({
      msg: "Barcha malumotlar ",
      variant: "success",
      payload: user,
      total: user.lenght,
    });
  } catch {
    return res.status(500).json({
      msg: "Serverda xatolik",
      variant: "error",
      payload: null,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const existUser = await Users.exists({ username: req.body.username });
    if (existUser) {
      return res.status(400).json({
        msg: "Bu username oldin yaratilgan",
        variant: "success",
        payload: null,
      });
    }
    const user = await Users.create(req.body);
    res.status(201).json({
      msg: "user yaratildi",
      variant: "success",
      payload: user,
    });
  } catch {
    res.status(500).json({
      msg: "Server error",
      variant: "error",
      payload: null,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Users.findByIdAndDelete(id);
    res.status(200).json({
      msg: "user ochirildi",
      variant: "success",
      payload: null,
    });
  } catch {
    res.status(500).json({
      msg: "Server error",
      variant: "error",
      payload: null,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      msg: "user o'zgartirildi",
      variant: "success",
      payload: user,
    });
  } catch {
    res.status(500).json({
      msg: "Server error",
      variant: "error",
      payload: null,
    });
  }
});

export default router;
