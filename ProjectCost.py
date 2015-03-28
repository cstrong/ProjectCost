############################################
#
# Main ProjectCost application file
#
############################################

from flask import Flask, current_app, render_template
from flask.ext.script import Manager
from flask.ext.bootstrap import Bootstrap
from flask.ext.mail import Mail, Message
from threading import Thread

app = Flask(__name__)

manager = Manager(app)
bootstrap = Bootstrap(app)
mail = Mail(app)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/user/<name>')
def user(name):
    return render_template('user.html', name=name, appname=current_app.name)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

app.config['MAIL_SUBJECT_PREFIX'] = 'ProjectCost'
app.config['MAIL_SENDER'] = 'ProjectCost Admin <projectcost@arielpartners.com'

def send_email(to, subject, template, **kwargs):
    msg = Message(app.config['MAIL_SUBJECT_PREFIX'] + subject,
                  sender=app.config['MAIL_SENDER'],
                  recipients=[to])
    msg.body = render_template(template + '.txt', **kwargs)
    msg.html = render_template(template + '.html', **kwargs)
    thr = Thread(target=send_async_email, args=[app, msg])
    thr.start()

def send_async_email(app, msg):
    with app.app_context():
        mail.send(msg)

if __name__ == '__main__':
    manager.run()
