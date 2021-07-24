import mongoose from "mongoose";

interface iComplaint {
	title: string;
	caseId: string;
	description: string;
	reporter: string;
	priority: number;
}
const ComplaintSchema = new mongoose.Schema<iComplaint>({
	title: String,
	caseId: String,
	description: String,
	reporter: String,
	priority: Number,
	created: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model<iComplaint>("Complaint", ComplaintSchema);
