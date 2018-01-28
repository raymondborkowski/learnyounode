const net = require('net');

function pad(n) { return n < 10 ? '0' + n : n }

module.exports = () => {
	const server = net.createServer((socket) =>	 {
	   // socket handling logic
		var today = new Date();
		var dd = pad(today.getDate());
		var mm = pad(today.getMonth()+1); //January is 0!
		var yyyy = today.getFullYear();
		var hh = pad(today.getHours());
		var min = pad(today.getMinutes());
		var s = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + min + '\n';
     	socket.end(s);
	});
	server.listen(process.argv[2]);
};
