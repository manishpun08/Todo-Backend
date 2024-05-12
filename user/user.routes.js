import express from "express";

const router = express.Router();

// create user
router.post("/user/register", (req, res) => {
  return res.status(201).send({ message: "User is registered successfully." });
});

export default router;
