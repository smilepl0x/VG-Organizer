const models = require('../models')
exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Express' });
}

exports.submit_lead = function(req, res, next) {
  return models.Game.create({
    title: req.body.game_title,
    imgURL: req.body.img_url,
    description: req.body.description,
    timePlayed: req.body.time_played
  }).then(lead => {
    res.redirect('/');
  })
}
