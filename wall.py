from flask import Flask, send_file, request  # , redirect, abort
from gevent.wsgi import WSGIServer
import json
from bs4 import BeautifulSoup

app = Flask(__name__)


@app.route('/', methods=['GET'])
def night():
    return send_file('html/w.html')


def url_array():
    with open('resource/url.txt') as f:
        str_ = f.read()
    url_list = json.loads(str_)
    return url_list


def page_url(page):
    n = 20
    page = int(page)
    url_list = url_array()
    url_list_split = [url_list[i:i + n] for i in range(0, len(url_list), n)]
    return url_list_split[page]


@app.route('/images', methods=['GET'])
def images():
    args = request.args
    page = args['page']
    p_url = page_url(page)
    return json.dumps(p_url)


@app.route('/<path:fn>', )
def file(fn):
    return send_file(fn)


WSGIServer(('', 9393), app).serve_forever()
