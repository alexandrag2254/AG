var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//only one schema for questions with associated answers to these questions
var UserSchema = new mongoose.Schema({
	day: String,
	description: String,
	links: [{
		url: String,
		title: String,
		likes: {type: Number, default: 0 },
		created_at: {type: Date, default: Date.now }
	}],
	files: [{
		file: String,
		title: String,
		likes: {type: Number, default: 0 },
		created_at: {type: Date, default: Date.now }
	}],
	created_at: {type: Date, default: Date.now },
	hidden: Boolean
});
mongoose.model('User', UserSchema);