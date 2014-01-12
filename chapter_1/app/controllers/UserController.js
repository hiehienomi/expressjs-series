module.exports.controller = function (app) {
  app.get('/users/login', function (req, res) {
    console.log('get user/login');
    res.render('users/login');
  });

  app.post('/users/login', function (req, res) {
    console.log('post user/login');
  });

  app.get('/users/info', function (req, res) {
    console.log('get user/info');
    res.render('users/info');
  });
};