let Router = require('ui/frame');
let DDP = require('../../shared/backend').DDP;

let Color = require('color')
let View;
exports.loaded = (args) => {
  View = args.object;
  // inputText.ios.layer.maskToBounds = false;
  // inputText.ios.layer.shadowOpacity =  1.0;
  // inputText.ios.layer.shadowRadius = 0.0;
  // inputText.ios.shadowColor = new Color('#000000').ios.CGColor;
  // inputText.ios.layer.shadowOffset = CGSizeMake(2.0, 2.0)
  DDP.connect( (error, wasReconnect) => {
    console.log('Cargo Meteor');
  })
}

let Save_email = () => {
  let inputText = View.getViewById('input')
  console.log(inputText.text);
}

let goLoginPage = () => {
  let route = Router.topmost();
  route.navigate('views/auth/login');
}

exports.Save_email = Save_email
exports.goLoginPage = goLoginPage
