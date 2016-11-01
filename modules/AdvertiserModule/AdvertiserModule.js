let prop;

window.AdvertiserModule = {

	props: {
		toggleResponseBtn: document.getElementById("toggle-response"),
		dropMenuBtn: document.getElementById("drop-menu-btn"),
		dropMenu: document.getElementById("drop-menu"),
		codeArea: document.getElementById("code-area")
	},

	init: function() {
		prop = this.props;
		this.fetchData('JSON');
		this.bindAction();
	},

	bindAction: function() {
		prop.toggleResponseBtn.addEventListener("click", function(event) {
			const requestType = event.target.innerHTML;
			AdvertiserModule.fetchData(requestType);
		});

		prop.dropMenuBtn.addEventListener("click", function() {
		 	prop.dropMenu.classList.toggle("show");
		});
	},

	fetchData: function(requestType) {
		let url;
		const placeholder = prop.codeArea;

		requestType === 'JSON' ? url = '/mock/response.json' : url = '/mock/response.xml';

		HttpService.httpAgent('GET', url, requestType, function(data) {
			placeholder.innerHTML = data;
		});
		
	}
};