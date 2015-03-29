
#########################################
#
# Project Cost project
#
# views.py
#
#########################################




from flask import render_template, session, redirect, url_for, current_app
from ..email import send_email
from . import main
from .forms import NameForm


@main.route('/', methods=['GET'])
def index():
    return render_template('index.html')
