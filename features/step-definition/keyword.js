//      keywordCheck = function (){
//     //var {Before, Given} = require('cucumber');

//     // Before({timeout: 60 * 1000}, function() {
//     //   return value ;// Does some slow browser/filesystem/network actions
//     // });
//     return 'time';
// }

keywordCheck = function (){
var {setDefaultTimeout} = require('cucumber'); 
setDefaultTimeout(30 * 1000);
return 'time';
}

module.exports = keywordCheck;