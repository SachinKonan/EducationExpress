function chatBot()
{

	// current user input
	this.input;

	/**
	 * respondTo
	 *
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 *
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */


	this.respondTo = function(input, updateChat)
	{
		this.input = input.toLowerCase();
		console.log(this.input);

		const client = new ApiAi.ApiAiClient({accessToken: '7c5995ccebc045f6b8e7d5157be18203'});
		const promise = client.textRequest(this.input);

		var val = promise.then(function handleResponse(serverResponse)
		{
			var hol = serverResponse.result.fulfillment.speech;
			console.log(hol);
			updateChat('Friday', hol);
		});
	}

	/**
	 * match
	 *
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {

		return new RegExp(regex).test(this.input);
	}
}
