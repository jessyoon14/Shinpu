const bodyParser = require('body-parser');

module.exports = (app, User) => {
  /* parsing */
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  /* Routing */
  app.get('/', (req, res) => {
    return res.render('log_in.html');
  })

  app.get('/sign_up', (req, res) => {
    res.render('sign_up.html');
  });

  app.get('/find_pw', (req, res) => {
    res.render('find_pw.html');
  });

  app.get('/update_pw', (req, res) => {
    res.render('update_pw.html')
  });

  app.get('/delete', (req, res) => {
    res.render('delete.html');
  });

  app.get('/api/find_pw', (req, res) => {
    /* 빈 input인지 확인 */
    if (req.query.id.length === 0) {
      console.log('Wrong input');
      return res.redirect('/find_pw');
    }
    /* 존재하는 id인지 확인 */
    User.findOne({ id: req.query.id }, (err, user) => {
      if (err) {
        console.log(err);
        return res.redirect('/find_pw');
      }
      else if (user === null) {
        console.log('ID does not exists');
        return res.redirect('/find_pw');
      }
      /* id가 존재하면 pw를 알려준다 */
      else {
        return res.send("Your password is " + user.pw);
      }
    });
  });

  app.get('/api/retrieve', (req, res) => {
    /* 모든 회원가입 정보 get */
    User.find({}, (err, user) => {
      if (err) {
      }
      /* id가 존재하면 pw를 알려준다 */
      else {
        res.json(user);
      }
    });
  });

  app.get('/api/delete', (req, res) => {
    /* 빈 input인지 확인 */
    if (req.query.id.length === 0) {
      console.log('Wrong input');
      return res.redirect('/find_pw');
    }
    User.deleteOne({ id: req.query.id }, (err) => {
      if (err) {
        console.log(err);
        return res.redirect('/delete');
      }
      console.log('data successfully deleted');
      return res.redirect('/');
    });
  });

  app.post('/api/add', (req, res) => {
    console.log(req.body);
    console.log(req.body.id);
    console.log(req.body.pw);
    console.log(req.body.id.length);
    console.log(req.body.pw.length);
    /* 빈 input인지 확인 */
    if (req.body.id.length === 0 || req.body.pw.length === 0 || req.body.pwcheck.length === 0) {
      console.log('Wrong input');
      return res.redirect('/sign_up');
    }
    /* pw와 pwcheck이 일치하는지 확인 */
    if (req.body.pw !== req.body.pwcheck) {
      console.log('PW and Retype PW is different');
      return res.redirect('/sign_up');
    }

    /* 이미 존재하는 id인지 확인 */
    User.findOne({ id: req.body.id }, (err, user) => {
      if (err) return res.redirect('/sign_up');
      else if (user !== null) {
        console.log('ID already exists');
        return res.redirect('/sign_up');
      }
      /* id가 존재하지 않으면 db에 저장 */
      else {
        const newuser = new User();
        newuser.id = req.body.id;
        newuser.pw = req.body.pw;

        newuser.save(err => {
          if (err) {
            console.log(err);
            return res.redirect('/sign_up');
          }
          console.log('good database created');
          return res.redirect('/');
        });
      }
    });
  });

  app.post('/api/update_pw', (req, res) => {
    /* 빈 input인지 확인 */
    if (req.body.id.length === 0 || req.body.pw.length === 0 || req.body.pwcheck.length === 0) {
      console.log('Wrong input');
      return res.redirect('/update_pw');
    }

    /* pw와 pwcheck이 일치하는지 확인 */
    if (req.body.pw !== req.body.pwcheck) {
      console.log('PW and Retype PW is different');
      return res.redirect('/update_pw');
    }

    /* 존재하는 id인지 확인 */
    User.findOne({ id: req.body.id }, (err, user) => {
      if (err) return res.redirect('/update_pw');
      else if (user === null) {
        console.log('ID does not exists');
        return res.redirect('/update_pw');
      }
      /* id가 존재하면 pw update를 한다 */
      else {
        user.pw = req.body.pw;

        user.save(err => {
          if (err) {
            console.log(err);
            return res.redirect('/update_pw');
          }
          console.log('database successfully updated');
          return res.redirect('/');
        });
      }
    });
  });
}