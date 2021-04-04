'use strict';
const express = require('express');
const app = express();
app.use(express.static('./public'));
app.get( '/itemslist/:page', (req, res) => {
	const page = req.params.page;
	fs.readFile('./public/database/items1.json', 'utf8', (err,data) => {
		res.send(data);
	})
}) 

		const isSVG = ext === 'svg';
		if (isSVG) {
			res.setHeader('Content-Type', 'image/svg+xml');
		}
		body = fs.readFileSync(req.url.slice(1), 'utf8')
	} catch(err) {
	//	str.slice(start [, end])
		body = fs.readFileSync('index.html', 'utf8')
	}
		console.log(req.url);
	
	res.end(body);
})
*/
app.listen(4000, () => {
	console.log('Server started!');
});