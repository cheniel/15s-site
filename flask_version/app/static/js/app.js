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
			var at_count = 0;
			for(var i = 0; i < email.length; i++){
				if(email[i] == "@")
					at_count++;
			}
			if(at_count == 1){
				proper_email = true;
			}
			if(!proper_email){
				$("label#email_error").html("Hmm this doesn't look like a proper address");
				$("label#email_error").show();
				$("input#email").focus();
				form_complete = false;
			}
		}

		var affiliation = $("input#affiliation").val();
		if(affiliation == ""){
			$("label#affiliation_error").show();
			$("input#affiliation").focus();
			form_complete = false;
		}	

		if(form_complete){
			var first_time = $("input#first_time").is(":checked");
			var gender = $("input#gender").val();
			var additional_info = $("textarea#additional_info").val();
			
			$.post('/data_submission', {
				first_name : first_name,
				last_name : last_name,
				email : email,
				affiliation : affiliation,
				first_time : first_time,
				gender : gender,
				additional_info : additional_info
			}).done(function(){
				$("#registration_form").html("<div id='success_msg'></div>");
				$("#success_msg").html("<p class='lead'>Thank you for your submission!</p>")
				.append("<p>We will get back to you ASAP regarding your registration status. In the meanwhile, feel free to <a href='mailto:dartmouthhackathon@gmail.com'>contact us</a> if you have any questions.</p>")
				.hide()
				.fadeIn(1500);
			});
		}


		return false;
	});
});