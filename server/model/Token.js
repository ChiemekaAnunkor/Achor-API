const mongoose = require("mongoose")
let Schema = mongoose.Schema;

let tokenSchema = new Schema(
    {
        access_token: {
            type: String,
        },
        user_id: { type: Schema.Types.ObjectId, ref: 'user' }


    },
    { timestamps: true },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

let Token = mongoose.model("token", tokenSchema);



module.exports = Token;
