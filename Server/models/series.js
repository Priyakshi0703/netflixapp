var mongoose = require('mongoose');

// Define our series schema
var SeriesSchema = new mongoose.Schema({
    series_id: { type: String, unique: true },
    series_name: { type: String }
});
module.exports = mongoose.model('Series', SeriesSchema);