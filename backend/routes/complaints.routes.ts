import express from "express";
const router = express.Router();
const Complaint = require("../models/Complaint");

router.get("/complaints", async (req, res) => {
	try {
		const result = await Complaint.find({});
		res.json(result);
	} catch (err) {
		console.log(err);
	}
});

router.post("/complaints", async (req, res) => {
	try {
		const { title, caseId, description, reporter, priority } = req.body.form;

		const complaint = await Complaint.create({
			title,
			caseId,
			description,
			reporter,
			priority,
		});

		return res.status(201).json({
			success: true,
			data: complaint,
		});
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
