const express = require('express');
const SimpleBleno = require('./simplebleno');
const JSend = require('./jsend');

const jsend = new JSend();
const simpleBleno = new SimpleBleno();
const app = express();

app.listen(3000, () => { /*console.log('server running');*/ });

app.get('/', (req, res, next) => {
	let state = simpleBleno.getState();
	res.json(jsend.returnSuccess(state));
});

app.get('/start/EIRAdvertisement/:data', (req, res, next) => {
	if (req.params.data) {
		simpleBleno.advertiseWithEIRData(req.params.data, function (error) {
			if (error) {
				res.json(jsend.returnError(error));
			} else {
				let state = simpleBleno.getState();
				res.json(jsend.returnSuccess(state));
			}
		});
	} else {
		res.json(jsend.returnFail("EIR Data (string) to advertise is required."));
	}

});

app.get('/stop', (req, res, next) => {
	simpleBleno.stopAdvertisement(function(error){
		if(error)
			res.json(jsend.returnError(error));
		else
			res.json(jsend.returnSuccess(simpleBleno.getState()));
	});
});
