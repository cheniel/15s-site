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

@website.route('/data_submission', methods=['POST'])
def data_submission():
	if request.method == 'POST':
		spreadsheet_client = gdata.spreadsheet.service.SpreadsheetsService()
		spreadsheet_client.debug = True
		spreadsheet_client.email = 'dartmouthhackathon@gmail.com'
		spreadsheet_client.password = 'darthack'
		spreadsheet_client.source = ''
		spreadsheet_client.ProgrammaticLogin()

		registrant = {
						'firstname' : request.form['first_name'],
						'lastname' : request.form['last_name'],
						'email' : request.form['email'],
						'affiliation' : request.form['affiliation'],
						'firsttime' : request.form['first_time'],
						'gender' : request.form['gender'],
						'additionalinfo' : request.form['additional_info']
				   	}

		spreadsheet_client.InsertRow(registrant, '1p8tMDMKyOpzPSGC4f9hzHQy6SPC4JsFtNNKkJOidjh0', 'od6')
	
	return jsonify({'status' : True})