const http = require('http');
const fs = require('fs');

module.exports = () => {
	const server = http.createServer((req, res) => {
		// request handling logic...
		fs.createReadStream(process.argv[3], { encoding: 'utf8' }).pipe(res);
	});
	server.listen(process.argv[2]);
};
