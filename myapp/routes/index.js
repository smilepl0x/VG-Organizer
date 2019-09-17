var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');
/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', landing.submit_game);
router.get('/games', landing.show_games);
router.get('/game/:game_id', landing.show_game);
module.exports = router;
