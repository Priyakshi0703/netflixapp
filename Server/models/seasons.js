var mongoose = require('mongoose');

// Define our seasons schema

var SeasonsSchema = new Schema({
    season_name: { type: String },
    season_data: { type: String },
    series_id: { type: String },
    season_id: { type: Number },
    Starts_On: { type: String },
    Ends_On: { type: String },
});

module.exports = mongoose.model('Seasons', SeasonsSchema);