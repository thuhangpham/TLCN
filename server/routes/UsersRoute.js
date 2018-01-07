
'use strict';
const UsersController = require('../controllers/UsersController.js');
const auth = require('../middle-wares/verify-token');
module.exports = (app) => {
    app.route('/private/api/users')
        .get(UsersController.getAllUser);

    app.route('/private/api/user_id/:id')
        .get(UsersController.getUserById)
        .delete(UsersController.deleteUser);

    app.route('/private/api/user_apply/:id')
        .get(UsersController.getUserByIdApply)

    app.route('/private/api/user')
        .post(UsersController.insertUser)
        .put(UsersController.updateUser);

    app.route('/private/api/user/authenticate')
        .post(UsersController.authentication);

    app.post('/private/api/verify', auth, UsersController.verify)

    app.route('/private/api/ckeck_login_fb/:id/:provider/:email')
        .get(UsersController.checkLoginFB);

    app.route('/private/api/login_fb')
        .post(UsersController.authWithFB);

    app.route('/private/api/change_pass/:id')
        .put(UsersController.changePassword);

    app.route('/private/api/update_pass')
        .put(UsersController.updatePassword);
}
    // app.route('/private/api/users')
    // .get(UsersController.getAllUser);

    // app.route('/private/api/user/:id')
    // .get(UsersController.getUserById)
    // .delete(UsersController.deleteUser);

    // app.route('/private/api/user_apply/:id')
    // .get(UsersController.getUserByIdApply)

    // app.route('/private/api/user')
    // .post(UsersController.insertUser)
    // .put(UsersController.updateUser);

    // app.route('/private/api/update_pass')
    // .put(UsersController.updatePassword);

    // app.route('/private/api/user/authenticate')
    // .post(UsersController.authentication);

    // app.post('/private/api/verify',auth,UsersController.verify);

    // app.route('/private/api/ckeck_login_fb/:id/:provider/:email')
    // .get(UsersController.checkLoginFB);

    // app.route('/private/api/login_fb')
    // .post(UsersController.authWithFB);