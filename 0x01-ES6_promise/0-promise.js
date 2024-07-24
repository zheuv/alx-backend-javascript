export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout (() {
			cosnt succes = true;
			if (success) {
				resolve("success");
			}	else {
				reject("failure");
			}
		}, 1000);
	});
}
