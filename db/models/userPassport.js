const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
mongoose.promise = Promise
const zipcode = require("./zipcode");

const userSchema = new Schema({
  displayName: {
    type: String,
    required: [true, 'Must provide display name.'],
  },
  email: {
    type: String,
    required: [true, 'Must provide email address.'],
  },
  avatar: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: [true, 'Must provide password.'],
  },
  skills: {
    type: [String],
    default: [],
  },
  needs: {
    type: [String],
    default: [],
  },
  zipcodes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Zipcode",
    }
  ],
  pending: [
    {
      type: Schema.Types.ObjectId,
      ref: "Zipcode",
    }
  ],
  threads: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thread",
    }
  ],
  date: { type: Date, default: Date.now },
});

// userSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
// userSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };

// Define hooks for pre-saving
userSchema.pre('save', function(next) {
  console.log("this is", this);
	if (!this.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	} else {
		this.password = this.generateHash(this.password)
		next()
	}
	// this.password = this.hashPassword(this.password)
	// next()
})

const User = mongoose.model("UserPassport", userSchema);

module.exports = User;