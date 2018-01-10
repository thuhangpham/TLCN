'use strict';
const PostController = require('../controllers/PostController.js');

module.exports = (app) => {
    app.route('/private/api/posts')
        .get(PostController.getAllPost)
        .post(PostController.getPostsByArea);

    app.route('/private/api/posts_user_id/:limit/:skip/:user_id')
        .get(PostController.getPostsByUserId);

    app.route('/private/api/post/:id')
        .get(PostController.getPostById)
        .delete(PostController.deletePost)


    app.route('/private/api/post')
        .post(PostController.insertPost)
        .put(PostController.updatePost);

    app.route('/private/api/posts/:limit/:skip')
        .get(PostController.getPosts);

    app.route('/private/api/add_comment')
        .post(PostController.addComment);

    // app.route('/private/api/add_reply')
    //     .post(PostController.addReply);

    app.route('/private/api/apply')
        .post(PostController.addApply);

    app.route('/private/api/un_apply')
        .post(PostController.unApply);
    app.route('/private/api/close_post/:id')
        .put(PostController.closePost);
}
