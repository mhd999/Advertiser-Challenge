var AdvertiserModule = function() {
	//define module api's
	var api = {
		init: init
	};
	//init instace of the HttpService
	var httpService = new HttpService();

	var props = {
		toggleResponseBtn: document.getElementById("toggle-response"),
		dropMenuBtn: document.getElementById("drop-menu-btn"),
		dropMenu: document.getElementById("drop-menu"),
		codeArea: document.getElementById("code-area"),
		typeLabel: document.getElementById("type-label"),
		headerData: document.getElementById("header"),
	};

	function bindAction() {
		props.toggleResponseBtn.addEventListener("click", function(event) {
			var requestType = event.target.innerHTML;
			fetchData(requestType);
		});

		props.dropMenuBtn.addEventListener("click", function() {
		 	props.dropMenu.classList.toggle("show");
		});
	}

	function fetchData(requestType) {
		var url,
			codeArea = props.codeArea,
	 		headerData = props.headerData,
		 	typeLabel = props.typeLabel;
		 	
		
		typeLabel.innerHTML = requestType;

		requestType === 'json' ? url = '/mock/response.json' : url = '/mock/response.xml';

		httpService.httpAgent('GET', url, requestType, function(response) {
			codeArea.innerHTML = response.data;

			var header = '';
			header += '<code "class="language-json">'
			header += 'HTTP&nbsp;' + response.status + '&nbsp;' + response.statusText + '<br>';
			header += 'Vary: Accept <br>';
			header += 'Allow: GET, POST, HEAD, OPTIONS <br>';
			header += 'content-type:&nbsp;' +response.contentType;
			header += '</code>';
			headerData.innerHTML = header;
		});
	}

	function init() {
		fetchData('json');
		bindAction();
	}
	
	return api;
};