import express from "express";
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/User");

import { DatabaseUserInterface } from "../utils/Interfaces";

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(406).send("Improper Values");
    return;
  }
  User.findOne(
    { username },
    async (err: Error, userExist: DatabaseUserInterface) => {
      if (err) throw err;
      if (userExist) res.status(409).send("User Already Exists");
      if (!userExist) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          username,
          password: hashedPassword,
        });
        await newUser.save();
        res.status(201).send("User signed up");
      }
    }
  );
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).send("User is logged in");
});

router.get("/user", (req, res) => {
  res.status(200).send(req.user);
});

router.post("/delete", async (req, res) => {
  const { id } = req.body;
  await User.findByIdAndDelete(id, (err: Error) => {
    if (err) throw err;
  });
  res.status(200).send("User is deleted");
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).send("User logged out");
});

module.exports = router;
