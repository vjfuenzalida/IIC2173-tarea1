var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var dateFormat = require('dateformat');

var Schema = mongoose.Schema;

var RequestSchema = Schema({
    server_ip: {
        type: String,
        required: true
    },
    client_ip: {
        type: String,
        required: true
    },
    date: {
        type: Date
    }
}, {timestamps: true});

// Virtual for request's summary
RequestSchema
    .virtual('summary')
    .get(function () {
        return `[${dateFormat(this.date)}]  CLIENT = ${this.client_ip}   |   SERVER = ${this.server_ip}`;
    });

// Virtual for request's URL
RequestSchema
    .virtual('url')
    .get(function () {
        return '/request/' + this._id;
    });

// Virtual for request's URL
RequestSchema
.virtual('formatdate')
.get(function () {
    return dateFormat(this.date);
});

//Export model
module.exports = mongoose.model('Request', RequestSchema);