'use strict';
const conController = require('../controllers/ConversationController');

module.exports = (app) => {
    app.route('/private/api/conversation/:_id')
        .get(conController.getConversation);
    app.route('/private/api/conversations/:_id')
        .get(conController.getConversations);

    app.route('/private/api/delete_conversation/:_id/:conversationId')
        .delete(conController.deleteConversation);
        
    app.route('/private/api/conversation')
        .post(conController.newConversation); 

    app.route('/private/api/update_message')
        .put(conController.updateMessage);

    app.route('/private/api/send_message')
        .post(conController.sendReply);

    app.route('/private/api/check_conversation')
        .post(conController.checkConversation);
}