exports = module.exports = function(app, mongoose) {

    'use strict';
    var Schema = mongoose.Schema;
    var ObjectId = mongoose.Schema.Types.ObjectId;

    var UserSchema = new Schema({
        name                    : String,
        email                   : String,
        dob                     : Date,
        contact                 : [{type: ObjectId, ref: 'Contact'}]
    });

    app.db.model('User', UserSchema);
};
