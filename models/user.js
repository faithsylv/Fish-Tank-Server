const mongoose = require("mongoose")
const Schema = mongoose.Schema
const passportLocalMongoose = require("passport-local-mongoose")
const Session = new Schema({
  refreshToken: {
    type: String,
    default: "",
  },
})
const User = new Schema({
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  institutionName: {
    type: String,
    default: "",
  },
  authStrategy: {
    type: String,
    default: "local",
  },
  refreshToken: {
    type: [Session],
  },
  question1: {
    type: String,
    default: ''
  },
  question2: {
    type: String,
    default: ''
  },
  question3: {
    type: String,
    default: ''
  },
  question4: {
    type: String,
    default: ''
  },
  question5: {
    type: String,
    default: ''
  },
  question6: {
    type: String,
    default: ''
  }
})
//Remove refreshToken from the response
User.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.refreshToken
    return ret
  },
})
User.plugin(passportLocalMongoose)
module.exports = mongoose.model("User", User)
