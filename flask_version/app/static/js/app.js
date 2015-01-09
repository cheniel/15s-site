$(function() {
	$(".error").hide();
	
	$(".submit-button").click(function(){
		$(".error").hide();

		var form_complete = true;
		var first_name = $("input#first_name").val();
		if(first_name == ""){
			$("label#first_name_error").show();
			$("input#first_name").focus();
			form_complete = false;
		}


		var last_name = $("input#last_name").val();
		if(last_name ==  ""){
			$("label#last_name_error").show();
			$("input#last_name").focus();
			form_complete = false;
		}

		var email = $("input#email").val();
		if(email == ""){
			$("label#email_error").html("This field is required");
			$("label#email_error").show();
			$("input#email").focus();
			form_complete = false;
		}else{
			var proper_email = false;
			for(var i = 0; i < email.length; i++){
				if(email[i] == "@"){
					proper_email = true;
					break;
				}
			}
			if(!proper_email){
				$("label#email_error").html("Hmm this doesn't look like a proper address");
				$("label#email_error").show();
				$("input#email").focus();
				form_complete = false;
			}
		}

		if(form_complete){
			var affiliation = $("input#affiliation").val();
			var gender = $("input#gender").val();
			var additional_info = $("textarea#additional_info").val();
			var first_time = $("input#first_time").val();
			var formData = "first_name=" + first_name + "&last_name=" + last_name + "&email=" + email
			+ "&affiliation=" + affiliation + "&gender=" + gender + "&additional_info=" + additional_info + "&first_time=" + first_time;

			$("#registration_form").html("<div id='success_msg'></div>");
			$("#success_msg").html("<p class='lead'>Thank you for your submission!</p>")
			.append("<p>We will get back to you ASAP regarding your registration status. In the meanwhile, feel free to <a href='mailto:dartmouthhackathon@gmail.com'>contact us</a> if you have any questions.</p>")
			.hide()
			.fadeIn(1500);

			/*$.ajax({
				type: "POST",
				url: $SCRIPT_ROOT + "/data_submission",
				contentType: "application/json; charset=utf-8",
				data: {
					first_name: first_name,
					last_name: last_name,
					email: email,
					affiliation: $("input#affiliation").val(),
					gender: $("input#gender").val(),
					additional_info: $("textarea#additional_info").val(),
					first_time: $("input#first_time").val()
				},
				success: function() {
					$("#registration_form").html("<div id='success_msg'></div>");
					$("#success_msg").html("<p class='lead'>Thank you for your submission!</p>")
					.append("<p>We will get back to you ASAP regarding your registration status. In the meanwhile, feel free to <a href='mailto:dartmouthhackathon@gmail.com'>contact us</a> if you have any questions.</p>")
					.hide()
					.fadeIn(1500);
				},
				error: function() {
					$("#registration_form").html("<div id='fail_msg'></div<");
					$("#fail_msg").html("<p class='lead'>Oops!</p>")
					.append("<p>It looks like something went awry...Please try again and if the error
					persists, let us know at dartmouthhackathon@gmail.com.</p>")
					.hide()
					.fadeIn(1500);
				}
			});*/
		}


		return false;
	});
});