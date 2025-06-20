from mongo_connect import db
from flask import *
from bson.json_util import dumps
from bson.objectid import ObjectId

app = Flask(__name__)
restaurants = db["restaurants"]

@app.route("/api/restaurant_listing", methods=["GET"])
def get_restaurant_listing():
    doc = restaurants.find()
    result = dumps(list(doc), indent= 4)
    return result
    
@app.route("/api/restaurant_detail/<id>", methods=["GET"])
def get_restaurant_detail(id):
    doc = restaurants.find_one({"_id": ObjectId(id)})
    result = dumps(doc, indent=4)
    return result

if __name__ == "__main__":
    app.run(debug=True, port=5000)