'use strict';
const http = require('http')
const fs = require('fs')

const server = http.createServer( function(req, res) {
	let body = null
	try {
		const ext = req.url.split('.')[1]
		const isSVG = ext === 'svg';
		if (isSVG) {
			res.setHeader('Content-Type', 'image/svg+xml');
		}
		body = fs.readFileSync(req.url.slice(1))
	} catch(err) {
	//	str.slice(start [, end])
		body = fs.readFileSync('index.html')
	}
		console.log(req.url);
	
	res.end(body);
})

server.listen(process.env.PORT || 3000)
console.log('Server started!');