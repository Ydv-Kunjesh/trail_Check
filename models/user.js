const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    phone: {
        type: String, // Storing as String to ensure leading zeros are preserved
        // required: true,
        match: [/^\d{10}$/, 'Phone number must be exactly 10 digits'] // Regex to match exactly 10 digits
    },
    profession: {
        type: String
    }
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("user", userSchema);
