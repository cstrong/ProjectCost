#########################################
#
# Project Cost project ReSTful API
#
# resources/__init__.py
#
#########################################

from flask import Blueprint

resources = Blueprint('resources', __name__)

from . import projects

