'use strict';
const replyController = require('../controllers/ReplyController');

module.exports = (app) => {
    app.route('/private/api/reply')
        .post(replyController.insertReply)
        .put(replyController.updateReply);
    app.route('/private/api/reply/:_id')
        .delete(replyController.deleteReply);

    app.route('/private/api/replies/:limit/:skip/:cmt_id')
        .get(replyController.getReplys);

    app.route('/private/api/count_reply_comment_id')
        .post(replyController.countReplysByCommentId);

}