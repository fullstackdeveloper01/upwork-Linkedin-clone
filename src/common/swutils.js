"use strict";

class SWHelper {
	static workerinstance = null;
	static get worker() {
		return this.workerinstance;
	}
	static set worker(worker) {
		this.workerinstance = worker;
	}

	static set accessToken(token) {
		console.log('SWHelper::accessToken::set()');
		try {
			this.postMessage('accesstoken_set', { token });
		} catch (error) {
			console.log('ERROR WHEN SETTING ACCESS TOKEN - %o', error)
		}
	}

	static postMessage(type, data) {
		console.log('SWHelper::accessToken::postMessage()');
		const worker = this.workerinstance
		if (worker) {
			try {
				worker.postMessage({ type, data });
			} catch (error) {
				console.log('Error posting message - %o', error)
			}
		} else {
			console.log('Unable to access service broker')
		}
	}
}

export default SWHelper