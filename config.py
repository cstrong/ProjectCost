#########################################
#
# Project Cost project
#
# config.py
#
#########################################

import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    SECRET_KEY = os.environ.get or 'hard to guess string'
    MAIL_SERVER = 'smtp.googlemail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = os.environ.get
    MAIL_PASSWORD = os.environ.get
    APP_MAIL_SUBJECT_PREFIX = '[Project Cost]'
    APP_MAIL_SENDER = 'Project Cost Admin <projectcost@example.com>'
    APP_ADMIN = os.environ.get

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True


class TestingConfig(Config):
    TESTING = True

class ProductionConfig(Config):
    pass


config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,

    'default': DevelopmentConfig
}
