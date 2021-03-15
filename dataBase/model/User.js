const { Schema, model } = require('mongoose');

const { USER } = require('../../constans/data-base-tables.enum');

const userSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    car: [{ type: Schema.Types.Mixed }]
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });

userSchema.virtual('full_name')
    .get(function() {
        return `${this.name} ${this.lastName}`;
    });

userSchema.virtual('userCar', {
    ref: 'Car',
    localField: 'car',
    foreignField: '_id'
});

userSchema
    .pre('find', function() {
        this.populate('userCar');
    })
    .pre('findOne', function() {
        this.populate('userCar');
    });

module.exports = model(USER, userSchema);
