from app import website
from flask import render_template, url_for, request, redirect, session, g
from forms import RegistrationForm

@website.route('/')
@website.route('/index')
def index():
	registration = RegistrationForm(request.form)
	return render_template('index.html', registration_form = registration)

@website.route('/register', methods=['GET', 'POST'])
def register():
	return redirect(url_for('index'))