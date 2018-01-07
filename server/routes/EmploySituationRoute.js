'use strict';
const EmploySituationController = require('../controllers/EmploySituationController');

module.exports = (app)=>{
   app.route('/private/api/employsituations')
    .get(EmploySituationController.getAllEmploySituation);

   app.route('/private/api/employsituation/:id')
    .get(EmploySituationController.getEmploySituationById)
    .delete(EmploySituationController.deleteEmploySituation)
    .put(EmploySituationController.updateEmploySituation);

   app.route('/private/api/employsituation')
    .post(EmploySituationController.insertEmploySituation);
}
