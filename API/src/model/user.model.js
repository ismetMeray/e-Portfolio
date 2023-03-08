const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const Schema = mongoose.Schema;

let user = new Schema(
  {
    username: {
      type: String
    },
    password: {
      type: String
    },
    email: {
      type: String
    }
  },
  { collection: "user" }
);

user.methods.hashPassword = async function(){
  this.password = await bcrypt.hash(this.password, 10);
}

user.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
}

module.exports = mongoose.model("users", user);