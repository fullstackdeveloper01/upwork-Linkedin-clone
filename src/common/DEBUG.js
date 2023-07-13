//import log from 'loglevel';
//import { green, inverse, bgLightCyan, underline, dim } from 'ansicolor'

const DEBUG = {
	debugEnabled: true,

	log(...args) {
		if (this.debugEnabled) {
			console.log.apply(null, args);
		}
	},

	error(...args) {
		if (this.debugEnabled) {
			console.error.apply(null, args);
		}
	}

}

export default DEBUG