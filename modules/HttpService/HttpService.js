let jsonCache;
let xmlCache;

HttpService = {
	/**
	* This is a function to call http end-points
	* @method httpAgent
	* @param {String} method - GET
	* @param {String} url - http://end-point-url.com/v1/END-POINT
	* @param {String} requestType - JSON, XML
	* @param {requestCallback} callback - The callback that handles the response.
	* @return {bool} 
	*/
	httpAgent: function(method, url, requestType, callback) {
		if(requestType === 'JSON' && jsonCache) {
			callback(jsonCache);
			return true;
		} else if(xmlCache) {
			callback(xmlCache);
			return true;
		}

		const httpRequest = new XMLHttpRequest();
		if (!httpRequest) {
	      callback('Cannot create an XMLHTTP instance');
	      return false;
		}

     	httpRequest.onreadystatechange = function(){
     		if (httpRequest.readyState === XMLHttpRequest.DONE) {
     			requestType === 'JSON' ? jsonCache = httpRequest.responseText : xmlCache =httpRequest.responseText;
     			callback(httpRequest.responseText);
     			return true;
     		} else {
     			callback('Error calling the API');
     			return false;
     		}
     	}
	    httpRequest.open(method, url, true);
	    httpRequest.send();
	}
};