from mongo_connect import db
from flask import *
from bson.json_util import dumps

app = Flask(__name__)

@app.route("/api/restaurant_listing", methods=["GET"])
def get_restaurant_listing():
    doc = db["restaurants"].find()
    result = dumps(list(doc), indent= 4)
    return result
    
@app.route("/restaurant_detail/<int:id>", methods=["GET"])
def get_restaurant_detail(id):
    pass

if __name__ == "__main__":
    app.run(debug=True, port=5000)