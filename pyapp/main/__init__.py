#########################################
#
# Project Cost project
#
# config.py
#
#########################################

from flask import Blueprint

main = Blueprint('main', __name__)

from . import views, errors
