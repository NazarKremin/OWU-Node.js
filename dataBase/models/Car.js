const { Schema, model } = require('mongoose');

const carSchema = new Schema({
    model: { type: String },
    price: { type: String }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

module.exports = model('Car', carSchema);
