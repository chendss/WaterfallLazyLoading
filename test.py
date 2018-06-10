import os
import glob

def filter_error(path):
    return 'error' not in path

path_list = sorted(glob.glob(r'./images/*.jpg'))
print(list(filter(filter_error, sorted(glob.glob(r'./images/*.jpg')))))
