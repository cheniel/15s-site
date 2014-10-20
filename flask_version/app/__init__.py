from flask import Flask
import forms

website = Flask(__name__)
website.config.from_object('config')

from app import views