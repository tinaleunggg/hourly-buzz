from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os
import pprint

load_dotenv()
uri = os.getenv("MONGO_URI")
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client["happyhourDB"]

if __name__ == '__main__':
    # testing1 = db.create_collection("testing1")
    # testing1.insert_one({"restaurant": "ABC", "address": "123 street"})
    # testing1.drop()
    restaurants = db["restaurants"]
    res = restaurants.find()
    for doc in res:
        pprint.pprint(doc)