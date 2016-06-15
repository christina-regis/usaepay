var usersController = require('../controllers/users_controller.js');
var express = require('express');
var router = express.Router();

router.route('/')
  .post(guestsController.form);


module.exports = router;
