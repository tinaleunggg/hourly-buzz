from mongo_connect import db
from flask import *
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # allow all origin now, need to change later for security

restaurants = db["restaurants"]

@app.route("/api/restaurant_listing", methods=["GET"])
def get_restaurant_listing():
    doc = restaurants.find()
    result = dumps(list(doc), indent= 4)
    return Response(result, mimetype="application/json")
    
@app.route("/api/restaurant_detail/<id>", methods=["GET"])
def get_restaurant_detail(id):
    doc = restaurants.find_one({"_id": ObjectId(id)})
    result = dumps(doc, indent=4)
    return Response(result, mimetype="application/json")

if __name__ == "__main__":
    app.run(debug=True, port=5000)