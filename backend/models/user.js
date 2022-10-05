const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    user_id: { type: String, unique:true ,required:true },
    // first_name: { type: String, required: true },
    // last_name: { type: String },
    username: { type: String, required: true },
    // user_password: { type: String,required:true},
    // user_role: { type: String},
    created_at: { type: Date, required: true ,default:Date.now},
    user_email: { type: String,
         required: true },
    user_contact: { type: String, required: true },
    passwordHash:{ type: String, required: true }
    // user_address: { type: String },
    // user_city: { type: String },
    // user_state: { type: String },
    // user_zip: { type: String },
    // user_location: { type: String },
    // user_country: { type: String},
    // user_wallet_id: { type: String },
    // user_reports_to: { type: String },
    // favorite_items: { type: Array },
});

userSchema.virtual("id").get(function () {
    return this._id.toHexString();
});
userSchema.set("toJSON", {
    virtuals: true,
});

exports.User = mongoose.model("User", userSchema);
