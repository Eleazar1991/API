
const router = require('express').Router();
const { createUsers } = require ('./users.controller');

router.post('/', createUsers);

module.exports = router;