var mongoose = require('mongoose'), Schema = mongoose.Schema;

// Define our episodes schema
var EpisodesSchema = new Schema({
    episode_id: { type: String },
    season_id: { type: String },
    comment: { type: String },

});

module.exports = mongoose.model('Episodes', EpisodesSchema);