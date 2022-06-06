const mongoose = require('mongoose');

const { Schema } = mongoose;

const mobaSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Gaming',
        required: true
    },

});

const Moba = mongoose.model('Moba', mobaSchema);

module.exports = Moba;
