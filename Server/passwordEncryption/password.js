var md5 = require('md5');
exports.passEncrypt = function (password) {
   return md5(password);
   
}