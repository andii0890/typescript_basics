function orderError(error: string) {
	throw new Error(error)
	// never going to return a value!
	}

	orderError('Something went wrong!')
