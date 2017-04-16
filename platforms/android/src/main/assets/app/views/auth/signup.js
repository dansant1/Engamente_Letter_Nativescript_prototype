let Router = require('ui/frame');
let DDP = require('../../shared/backend').DDP;
let Observable = require("data/observable").Observable;

let Color = require('color')
let View;
let user = new Observable({
  email: ''
});

exports.loaded = (args) => {
  View = args.object;

  if (View.ios) {
    let navigationBar = Router.topmost().ios.controller.navigationBar;
    navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
  }

  DDP.connect( (error, wasReconnect) => {
    View.bindingContext = user;
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
