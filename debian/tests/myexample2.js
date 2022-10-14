var fs = require('fs');
var split2 = require('split2');

var splitFile = function(filename) {
  var file = fs.createReadStream(filename)
 
  return file
    .pipe(split2())
    .on('close', function() {
      // destroy the file stream in case the split stream was destroyed 
	file.destroy()
	console.log('destroyed');
    })
}
 
var stream = splitFile('LICENSE')
 
stream.destroy() // will destroy the input file stream
