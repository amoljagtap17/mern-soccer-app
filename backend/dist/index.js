"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = 3000;
app.get('/', function (req, res) {
  return res.send("App is running! on ".concat(PORT));
});
app.listen(PORT, function () {
  return console.log("App is running on localhost : ".concat(PORT));
});