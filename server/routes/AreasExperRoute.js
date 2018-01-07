'use strict';
const AreaExController = require('../controllers/AreasExperController');

module.exports = (app)=>{
   app.route('/private/api/areaexs')
    .get(AreaExController.getAllAreaEx);

   app.route('/private/api/areaex/:id')
    .get(AreaExController.getAreaExById)
    .delete(AreaExController.deleteAreaEx)
    .put(AreaExController.updateAreaEx);

   app.route('/private/api/areaex')
    .post(AreaExController.insertAreaEx);

   app.route('/private/api/count_post_by_area_ex')
    .get(AreaExController.countPostByAreaEx);
}
