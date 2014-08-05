var mongoose = require('mongoose');

module.exports = mongoose.model('contact', {
    test : String,
    final : Boolean
});
