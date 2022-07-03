import json


def get_json(file_nm: str):
    path = "/app/jsons/" + file_nm
    return json.load(open(path, "r"))
