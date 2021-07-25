import mongoose from "mongoose";

interface iUser {
	username: string;
	password: string;
}
const UserSchema = new mongoose.Schema<iUser>({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},

	created: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model<iUser>("User", UserSchema);
