const bl = require('bl');
const http = require('http');

module.exports = (url, cb) => {
	http.get(url, (response) => {
		response.setEncoding('utf8');
		response.on('error', console.error);
		response.pipe(bl((err, data) => {
			data = data.toString();
			cb(data);
		}));
	}).on('error', console.error)
};