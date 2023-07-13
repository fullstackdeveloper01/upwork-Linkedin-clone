import DEBUG from './DEBUG'

function wrapError(error) {
	if (typeof error === 'string') {
		error = { message: error }
	}

	DEBUG.log('ERROR - ', error.message)
	return error
}

export {
	wrapError
}