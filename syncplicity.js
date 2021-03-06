const sdk = require("kinvey-flex-sdk");
const syncpointsIntegration = require("./data/syncpoints.js");
const serverCredentials = require("./serverCredentials.js");

const service = sdk.service(function(err, flex) {
	console.log("started service: " + JSON.stringify(flex));
	const flexAuth = flex.auth;
	const flexData = flex.data;
	const flexFunctions = flex.functions;

	const syncpoints = flexData.serviceObject("Syncpoints");
	syncpoints.onGetAll(syncpointsIntegration.getAll);
});
