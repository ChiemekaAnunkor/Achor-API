const mongoose = require("mongoose")
let Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
    },
    { timestamps: true }
);

let User = mongoose.model("user", userSchema);



module.exports = User;
