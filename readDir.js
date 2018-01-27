const path = require('path');
const fs = require('fs');

const readDir = (dir, ext, callback) => {
	const files = [];
	fs.readdir(dir, (err, list) => {
	    if (err) { return callback(err); }
	    list = list.filter((file) => {
      		return path.extname(file) === '.' + ext
    	})
		callback(null, list);
	});
}

module.exports = readDir;