var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define Option schema
var AnswerSchema = new mongoose.Schema({
    text: {type: String},
    likes: {type: Number},
    details: {type: String},
    username: {type: String},
    _question: {type: Schema.Types.ObjectId, ref: 'Question'}
}, {timestamps: true }, { usePushEach: true });

var Answer = mongoose.model('Answer', AnswerSchema);
module.exports = Answer;