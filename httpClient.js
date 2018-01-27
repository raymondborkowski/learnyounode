const http = require('http');

module.exports = (url, cb) => {
	http.get(url, (response) => {
		response.setEncoding('utf8');
		response.on('error', console.error);
		response.on('data', cb)
	}).on('error', console.error)
};