const mongoose = require("mongoose");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true],
    match: [/^\S+@\S+\.\S+$/, "Not a valid email format"],
  },
  name: String,
  hash: String,
  salt: String,
  favorites: [{ type: Schema.Types.ObjectId, ref: "Movie", default: [] }],
});

userSchema.methods.generateHashPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`);
};

userSchema.methods.validPassword = function (password) {
  let hashToVerify = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`);
  return this.hash === hashToVerify;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
