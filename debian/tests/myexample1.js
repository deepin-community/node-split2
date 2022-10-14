
var fs = require('fs');
var split2 = require('split2');
var file = 'LICENSE';

fs.createReadStream(file)
    .pipe(split2())
    .on('data', function (line) {
	//each chunk now is a seperate line!
	console.log(line);
    });

