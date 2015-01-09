from app import website
from flask import render_template, url_for, request, redirect, session, g, jsonify
from forms import RegistrationForm
import cgi
import gdata.spreadsheet.service

@website.route('/')
@website.route('/index')
def index():
	registration = RegistrationForm(request.form)
	success = False
	return render_template('index.html', registration_form = registration, success = success)

"""@website.route('/register', methods=['GET', 'POST'])
def register():

	#registration_form = RegistrationForm(request.form)


	if request.method == 'POST' and registration_form.validate():
		spreadsheet_client = gdata.spreadsheet.service.SpreadsheetsService()
		spreadsheet_client.debug = True
		spreadsheet_client.email = 'dartmouthhackathon@gmail.com'
		spreadsheet_client.password = 'darthack'
		spreadsheet_client.source = ''
		spreadsheet_client.ProgrammaticLogin()

		registrant = {
						'firstname' : registration_form.first_name.data,
						'lastname' : registration_form.last_name.data,
						'email' : registration_form.email.data,
						'affiliation' : registration_form.affiliation.data
				   	}

		spreadsheet_client.InsertRow(registrant, '1p8tMDMKyOpzPSGC4f9hzHQy6SPC4JsFtNNKkJOidjh0', 'od6')

	return """
	#return render_template('index.html', registration_form = registration_form, success = success)