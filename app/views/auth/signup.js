let Router = require("ui/frame");

exports.loaded = () => {
  console.log('Cargo...Signup');
}

let Save_email = () => {
  alert('Next')
}

let goLoginPage = () => {
  let route = Router.topmost();
  route.navigate('views/auth/login');
}

exports.Save_email = Save_email
exports.goLoginPage = goLoginPage
