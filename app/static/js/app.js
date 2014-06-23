(function(){
	var angularApp = angular.module('angularApp', []);
	var errorMessages = {}
	var xmlhttp;	

	angularApp.controller('validationController', function($scope){
		this.validate = function($scope){
			if(window.XMLHttpRequest){
				xmlhttp = XMLHttpRequest();
			}else{
				xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
			}
			xmlhttp.onreadystatechange = function(){
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
					errorMessages = xmlhttp.responseText;
				}
			}
			xmlhttp.open('POST', 'validation.py', true);
			xmlhttp.send();
			alert('shit');
			alert('last alert');
		}
	});
	
	angularApp.controller('liveFeedController', function(){

	});
})();