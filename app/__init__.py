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
from config import config

bootstrap = Bootstrap()
mail = Mail()


def create_app(config_name):
    app = Flask(__name__)
    app.debug = True
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    bootstrap.init_app(app)
    mail.init_app(app)

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from .api_1_0 import api as api_1_0_blueprint
    app.register_blueprint(api_1_0_blueprint, url_prefix='/api/v1.0')

    return app

