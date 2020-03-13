"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = 3000; // mongo connection

_mongoose["default"].Promise = global.Promise;

_mongoose["default"].connect('mongodb://localhost/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); // bodyParser setup


app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.get('/', function (req, res) {
  return res.send("App is running on port ".concat(PORT));
});
app.listen(PORT, function () {
  return console.log("App is running on localhost : ".concat(PORT));
});