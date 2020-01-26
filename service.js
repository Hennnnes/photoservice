const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('uploads'));

app.get('/files', (req, res) => {
	res.json(fs.readdirSync('uploads'));
});

app.listen(8080, () => {
	console.log('server started');
});