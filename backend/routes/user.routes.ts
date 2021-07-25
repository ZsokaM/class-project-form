import express from "express";
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/User");

import { DatabaseUserInterface } from "../utils/Interfaces";

router.post("/signup", async (req, res) => {
	const { username, password } = req?.body;
	if (
		!username ||
		!password ||
		typeof username !== "string" ||
		typeof password !== "string"
	) {
		res.send("Improper Values");
		return;
	}
	User.findOne(
		{ username },
		async (err: Error, userExist: DatabaseUserInterface) => {
			if (err) throw err;
			if (userExist) res.send("User Already Exists");
			if (!userExist) {
				const hashedPassword = await bcrypt.hash(password, 10);
				const newUser = new User({
					username,
					password: hashedPassword,
				});
				await newUser.save();
				res.send("success");
			}
		}
	);
});

router.post("/login", passport.authenticate("local"), (req, res) => {
	res.send("success");
});

router.get("/user", (req, res) => {
	res.send(req.user);
});

router.post("/deleteuser", async (req, res) => {
	const { id } = req?.body;
	await User.findByIdAndDelete(id, (err: Error) => {
		if (err) throw err;
	});
	res.send("success");
});

router.get("/logout", (req, res) => {
	req.logout();
	res.send("success");
});

module.exports = router;
