'use strict'
var mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');

var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    rut: {type: String, unique: true, index: true },
    pass: String,
    email: String,
    phone: Number,
    type: String,
    createdAt: Date,
    updatedAt:{type: Date,default: Date.now},
    routines: [{ type: Schema.Types.ObjectId, ref: 'Routine' }]
});
UserSchema.plugin(mongoose_delete, {deletedAt : true, overrideMethods: 'all'  });
module.exports = mongoose.model('user',UserSchema);