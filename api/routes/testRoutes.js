'use strict';
const swaggerValidation = require('openapi-validator-middleware');
module.exports = function(app) {
  var controller = require('../controllers/testController');

  app.route('/User')
  .post(swaggerValidation.validate,controller.newUser);
  app.route('/User/:ID')
  .get(swaggerValidation.validate,controller.getUser);
  app.route('/User/:ID')
  .put(swaggerValidation.validate,controller.updateUser);
  app.route('/User/:ID')
  .delete(swaggerValidation.validate,controller.deleteUser);
  app.route('/login')
  .post(swaggerValidation.validate,controller.login);

};