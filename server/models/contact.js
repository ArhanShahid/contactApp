exports = module.exports = function(app, mongoose) {

    'use strict';
    var Schema = mongoose.Schema;
    var ObjectId = mongoose.Schema.Types.ObjectId;

    var contactSchema = new Schema({
        owner                   : {type: ObjectId, ref: 'User'},
        name                    : String,
        phone                   : Number
    });

    app.db.model('Contact', contactSchema);
};






