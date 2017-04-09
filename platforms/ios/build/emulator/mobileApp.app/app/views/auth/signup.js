let Router = require('ui/frame');
let DDP = require('../../shared/backend').DDP

exports.loaded = () => {
  console.log('Cargo...Signup');
  DDP.connect( (error, wasReconnect) => {
    console.log('Cargo Meteor');
  })
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
