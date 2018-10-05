const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BonsaiSchema = new Schema({
    commonName: String,
    genusName: String,
    source: String,
    lastRepotted: Date,
    style: String,
    sizeInCM: Number,
    isIndoors: Boolean
});

const Bonsai = mongoose.model('Bonsai', BonsaiSchema);

module.exports = Bonsai;

