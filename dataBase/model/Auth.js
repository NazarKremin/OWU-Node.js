const { Schema, model } = require('mongoose');
const { AUTH, USER } = require('../../constans/data-base-tables.enum');

const AuthSchema = new Schema({
    access_token: { type: String },
    refresh_token: { type: String },
    _user_id: { type: Schema.Types.ObjectId, ref: USER },
}, { timestamps: true });

module.exports = model(AUTH, AuthSchema);
