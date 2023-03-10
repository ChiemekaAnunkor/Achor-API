const mongoose = require("mongoose")
let Schema = mongoose.Schema;

let tokenSchema = new Schema(
    {
        api_key: {
            type: String,
            require: true

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

let Token = mongoose.model("apikey", tokenSchema);



module.exports = Token;
