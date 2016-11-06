var HttpService =  function() {
	//define module api's
	var services = {
		httpAgent: httpAgent
	};

	var jsonCache,
		xmlCache;

	/**
	* This is a function to call http end-points
	* @method httpAgent
	* @param {String} method - GET
	* @param {String} url - http://end-point-url.com/v1/END-POINT
	* @param {String} requestType - json, xml
	* @param {requestCallback} callback - The callback that handles the response.
	* @return {bool} 
	*/
	function httpAgent(method, url, requestType, callback) {
		if(requestType === 'json' && jsonCache) {
			callback(jsonCache);
			return true;
		} else if(xmlCache) {
			callback(xmlCache);
			return true;
		}

		var httpRequest = new XMLHttpRequest();
		if (!httpRequest) {
	      callback('Cannot create an XMLHTTP instance');
	      return false;
		}

     	httpRequest.onreadystatechange = function(){
     		if (httpRequest.readyState === XMLHttpRequest.DONE) {
     		
     			var contentType = httpRequest.getResponseHeader('content-type');
     			var response = {
     				data: httpRequest.responseText,
     				status: httpRequest.status,
     				statusText: httpRequest.statusText,
     				contentType: contentType
     			}

     			requestType === 'json' ? jsonCache = response : xmlCache = response;
     			callback(response);
     			return true;
     		} else {
     			callback('Error calling the API');
     			return false;
     		}
     	}
	    httpRequest.open(method, url, true);
	    httpRequest.send();
	}

	return services;
};