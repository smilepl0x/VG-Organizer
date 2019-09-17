const models = require('../models')

exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Express' });
}

exports.submit_game = function(req, res, next) {
  return models.Game.create({
    title: req.body.game_title,
    imgURL: req.body.img_url,
    description: req.body.description,
    timePlayed: req.body.time_played
  }).then(game => {
    res.redirect('/games');
  })
}

exports.show_games = function(req, res, next) {
  models.Game.findAll().then(games => {
    res.render('landing', { title: 'Express', games: games });
  })
}

exports.show_game = function(req, res, next) {
  return models.Game.findOne({
    where: {
      id: req.params.game_id
    }
  }).then(game => {
    res.render('game', { game : game});
  })
}

exports.show_edit_game = function(req, res, next) {
  return models.Game.findOne({
    where: {
      id: req.params.game_id
    }
  }).then(game => {
    res.render('game/edit_game', { game : game});
  })
}

exports.edit_game = function(req, res, next) {
  return models.Game.update({
    title: req.body.game_title
  }, {
    where: {
      id: req.params.game_id
    }
  }).then(result => {
    res.redirect('/game/' + req.params.game_id);
  })
}
