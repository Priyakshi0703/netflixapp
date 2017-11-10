var mongoose = require('mongoose'), Schema = mongoose.Schema;

// Define our movies schema
var MoviesSchema = new Schema({
    movies_id: { type: String },
    movies_name: { type: String },

});

module.exports = mongoose.model('Episodes', EpisodesSchema);