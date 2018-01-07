'use strict';
const cmtController = require('../controllers/CommentController');

module.exports = (app) => {
    app.route('/private/api/comment')
        .post(cmtController.insertComment)
        .put(cmtController.updateComment);
    app.route('/private/api/comment/:_id')
        .delete(cmtController.deleteComment);

    app.route('/private/api/comments/:limit/:skip/:post_id')
        .get(cmtController.getComments);

    app.route('/private/api/count_comment_post_id')
        .post(cmtController.countCommentsByPostId);

}