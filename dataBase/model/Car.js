const { Schema, model } = require('mongoose');

// const { CAR } = require('../../constans/data-base-tables.enum');

const carSchema = new Schema({
    marka: { type: String, required: true },
    model: { type: String, required: true },
    color: { type: String },
    price: { type: Number, required: true }
}, { timestamps: true });

module.exports = model('Car', carSchema);
