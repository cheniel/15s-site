from app import website
from flask import render_template, url_for, request, redirect, session, g, jsonify
import gdata.spreadsheet.service


@website.route('/')
@website.route('/index')
def index():
    success = False
    return render_template('index.html')
