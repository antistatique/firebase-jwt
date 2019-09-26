const firebase = require('firebase');
const config = require('./config.json');

firebase
  .initializeApp(config)
  .auth()
  .signInWithEmailAndPassword(config.user, config.password)
  .then(res => {
    res.user.getIdToken(true).then(token => console.log(token));
  })
  .catch(err => console.error(err));
