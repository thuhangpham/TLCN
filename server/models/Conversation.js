const mongoose = require('mongoose'),
Schema = mongoose.Schema;
// Schema defines how chat messages will be stored in MongoDB
const ConversationSchema = new Schema({
    participants: [{ type: Schema.Types.ObjectId, ref: 'users' }],
}, {timestamps:true});

module.exports = mongoose.model('conversation', ConversationSchema);  