from flask import Flask, send_file, request  # , redirect, abort
from gevent.pywsgi import WSGIServer
import os
import glob
import json

app = Flask(__name__)


@app.route('/', methods=['GET'])
def night():
    return send_file('html/w.html')


def filter_error(path):
    return 'error' not in path


@app.route('/imges', methods=['GET'])
def imges():
    pageIndex = int(request.args.get('pageIndex'))
    pageSize = int(request.args.get('pageSize'))
    file_list = sorted(glob.glob(r'./images/*.jpg'))
    path_list = list(filter(filter_error, file_list))
    correct_list = [i.replace('\\', '/') for i in path_list]
    result = [correct_list[i:i+pageSize]
              for i in range(0, len(correct_list), pageSize)]
    if pageIndex-1 >= len(result):
        return json.dumps([])
    return json.dumps(result[pageIndex-1])


@app.route('/<path:fn>',)
def file(fn):
    return send_file(fn)


WSGIServer(('', 6869), app).serve_forever()
