from flask import Flask, send_file, request  # , redirect, abort
from gevent.wsgi import WSGIServer
import json
import requests

app = Flask(__name__)


def base_body(url):
    """
    获得一个网页的返回值
    :param url:空
    :return: body
    """

    s = requests.session()

    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) '
                      'Chrome/60.0.3112.90 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
    }

    r = s.get(url, headers=headers)
    text = r.text

    return text


def h_images(src):
    body = json.loads(base_body(src))
    pins = ['http://img.hb.aicdn.com/' + p['file']['key'] + '_fw236' for p in body['pins']]
    return pins


@app.route('/', methods=['GET'])
def night():
    return send_file('html/w.html')


def get_src(args):
    src = 'http://huaban.com/search/?q=变形金刚'
    if len(args) != 0:
        page = args['page']
        src = 'http://huaban.com/search/?q=%E5%8F%98%E5%BD%A2%E9%87%91%E5%88%9A&jc0ci1kw&page={}&per_page=20&wfl=1'
        src = src.format(page)
    return src


@app.route('/images', methods=['GET'])
def images():
    args = request.args
    src = get_src(args)
    img_list = h_images(src)
    img_dict = {
        'list': img_list,
        'length': len(img_list),
    }
    return json.dumps(img_dict)


@app.route('/<path:fn>', )
def file(fn):
    return send_file(fn)


WSGIServer(('', 9393), app).serve_forever()
