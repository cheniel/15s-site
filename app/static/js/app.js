(function(){
	var angularApp = angular.module('angularApp', []);
	var errorMessages = {};
	var xmlhttp;	

	angularApp.controller('validationController', function($scope){
		
		this.validate = function($scope){
			
			
			alert('Thanks for registering!');
			return true;
		}

		this.submitForm = function($scope){
			alert('got here');
			var firstname = $('#first-name').val();
			var lastname = $('#last-name').val();
			var email = $('#email').val();
			var affiliation = $('#affiliation').val();

			if(this.validate()){
				$.ajax({
					url: 'https://docs.google.com/forms/d/1E7P0fDQl4Jsz0Pgkmeer9FBhYfV24wFH-SG25iPq5ts/formResponse',
					data: {'entry.1': firstname,
						   'entry.2': lastname,
						   'entry.3': email,
						   'entry.4': affiliation
						  },
					type: 'POST',
					dataType: 'xml',
					statusCode: {
						0: function(){
							$('#first-name').val('');
							$('#last-name').val('');
							$('#email').val('');
							$('#affiliation').val('');
						},
						200: function(){
							$('#first-name').val('');
							$('#last-name').val('');
							$('#email').val('');
							$('#affiliation').val('');
						}
					}
				});
			}else{

			}
	});
})();