
require('./style.css');

var mConent = require('./content.js');
var toolkit = require('Toolkit');

document.write(mConent.test);


document.write('</br>');
document.write(__TIMESTAMP__);


if (__DEV__) {
  console.warn('Extra logging');
}

console.log(toolkit.isArray([]));

