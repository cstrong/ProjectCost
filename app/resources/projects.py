#########################################
#
# Project Cost project ReSTful API
#
# resources/projects.py
#
#########################################

from flask import request, jsonify
from flask.ext.restful import Resource

all_projects = {}
all_projects['abc'] = {
    'projectId':    'abc',
    'projectName':  'Project Cost',
    'geoLocation':  '10001',
    'projectType':  'Information System',
    'laborModel': 'Alliant',
    'basePeriodDuration': '6 Months',
    'optionPeriodsNumber': 1,
    'optionPeriodDuration': '3 Months',
    'size': 'Medium',
    'escalationRate': '1.5%',
    'estimatedValue': '$33,002,133.00'
}

all_projects['def'] = {
    'projectId': 'def',
    'projectName': 'HourGlass',
    'geoLocation': '10001',
    'projectType': 'Information System',
    'laborModel': 'Alliant',
    'basePeriodDuration': '1 Year',
    'optionPeriodsNumber': 3,
    'optionPeriodDuration': '3 Months',
    'size': 'Small',
    'escalationRate': '1.75%',
    'estimatedValue': '$23,302,338.00'
}


class Project(Resource):
    def get(self, project_id):
        return {project_id: all_projects[project_id]}

    def put(self, project_id):
        all_projects[project_id] = request.form['data']
        return {project_id: all_projects[project_id]}

class Projects(Resource):
    def get(self):
        result = { 'result': list(all_projects.values()) }
        return jsonify(result)
