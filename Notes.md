Installation for Mac
====================

GitHub
------
> GitHub for Mac `https://mac.github.com`

> Setup project `https://github.com/cstrong/ProjectCost`

> Cloned repository to `~/GitHub/ProjectCost`

Python
------
> Downloaded Python 3.4.3 from http://python.org

> python3 interpreter will be available as `python3`

> It cannot be default python because that would break system utilities for macOS

> easy_install is available as `easy_install-3.4`

VirtualEnv
----------
> Install Virtualenv 12.0.7:   `easy_install-3.4 virtualenv`  
>
> `cd ~/GitHub/ProjectCost`
>
> `virtualenv-3.4 venv`
>
> `source venv/bin/activate`

Flask and Plugins
-----------------
> `pip install flask`
> `pip install flask-bootstrap`
> `pip install flask-script`
> `pip install flask-mongoengine`
> `pip install flask-mail`

PyCharm Preferences
-------------------
> Install `flask-bootstrap`
> Install `flask-script`
> Install `flask-mongoengine`
> Install `flask-mail`

Generate requirements.txt
--------------------------
> `pip freeze >requirements.txt`