const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 15 },
    car: [{ type: Schema.Types.ObjectId }],
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

userSchema.virtual('full_name').get(function() {
    return `${this.name} ${this.age}`;
});

userSchema.virtual('cars', {
    ref: 'Car',
    localField: 'Car',
    foreignField: '_id',
});

userSchema
    .pre('find', function() {
        this.populate('cars');
    })
    .pre('findOne', function() {
        this.populate('cars');
    });

module.exports = model('User', userSchema);
