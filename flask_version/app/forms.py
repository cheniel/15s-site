''' forms for the HackDartmouth website '''

from wtforms import Form, TextField, TextAreaField, SubmitField, BooleanField, validators

class RegistrationForm(Form):
	first_name = TextField('first_name', [validators.Required()])
	last_name = TextField('last_name', [validators.Required()])
	email = TextField('email', [validators.Required(), validators.Email(message=u'Oops! That looks like an invalid email address!')])
	affiliation = TextField('affiliation')
	gender = TextField('gender')
	additional_info = TextAreaField('Anything else you\'d like us to know? E.g. dietary restrictions, accessibility accommodations, etc.')
	first_time = BooleanField('Is this your first time hacking?', [validators.Required()])
	submit = SubmitField('Register Now!')