const { Schema, model } = require('mongoose');

// const { dataBaseEnum: { USER } } = require('../../constans');// Чомусь не бачить і вибиває ерору

const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 15 },
    email: { type: String, required: true },
    password: { type: String, required: true },
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
