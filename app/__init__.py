#########################################
#
# Project Cost project
#
# pyapp/__init__.py
#
#########################################

from flask import Flask
from flask.ext.bootstrap import Bootstrap
from flask.ext.mail import Mail
from flask.ext.triangle import Triangle
from flask.ext.restful import Api
from config import config

bootstrap = Bootstrap()
mail = Mail()
triangle = Triangle()

def create_app(config_name):
    app = Flask(__name__)
    app.debug = True
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    bootstrap.init_app(app)
    mail.init_app(app)
    triangle.init_app(app)
    api = Api(app)

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from .resources import resources as resources_blueprint
    app.register_blueprint(resources_blueprint)

    # register resources
    from .resources import projects
    api.add_resource(projects.Project, '/projects/<project_id>')
    api.add_resource(projects.Projects, '/projects')


    return app

