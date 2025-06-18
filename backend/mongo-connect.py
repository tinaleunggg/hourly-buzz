from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os
import csv

load_dotenv()
uri = os.getenv("MONGO_URI")
# Create a new client and connect to the server

client = MongoClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


db = client["gameDB"]
players = db["players"]
players.drop()
items = db["items"]
items.drop()
friendships = db["friendships"]
friendships.drop()
wallets = db["wallets"]
wallets.drop()


players = db.create_collection("players")
items = db.create_collection("items")
friendships = db.create_collection("friendships")
wallets = db.create_collection("wallets")



# with open('data_csv_SQL/mongo_players.csv', 'r') as f:
#     data_reader = csv.DictReader(f)
#     for row in data_reader:
#         row["level"] = int(row["level"])
#         row["xp"] = int(row["xp"])
#         row["matches_played"] = int(row["matches_played"])
#         row["wins"] = int(row["wins"])
#         players.insert_one(row)


# # insert to wallets
# wallets_data = []
# with open('data_csv_SQL/wallets.csv', 'r') as f:
#     data_reader = csv.DictReader(f)

#     for row in data_reader:
#         member_id = row["member_id"]
#         oid = players.find_one({"member_id": member_id})["_id"]      
#         entry = {"player": oid, "coins": int(row["coins"])}
#         wallets_data.append(entry)
# wallets.insert_many(wallets_data)

# # insert to items
# items_data = []
# with open('data_csv_SQL/purchased_items.csv', 'r') as f:
#     data_reader = csv.DictReader(f)

#     for row in data_reader:
#         member_id = row["member_id"]
#         oid = players.find_one({"member_id": member_id})["_id"]
#         item_list = [{"item": row["purchased_item"], "price": int(row["price"])}]
#         entry = {"player": oid, "purchased_items": item_list}
#         items_data.append(entry)


# items.insert_many(items_data)

# # insert to friendships
# friendships_data = []

# with open('data_csv_SQL/friendships.csv', 'r') as f:
#     data_reader = csv.DictReader(f)

#     for row in data_reader:
#         member_id = row["member_id"]
#         oid = players.find_one({"member_id": member_id})["_id"]

#         friend = row["friends"]
#         friend_oid = players.find_one({"username": friend})["_id"]

#         exist = False

#         for dict in friendships_data:
#             if dict["player"] == oid:
#                 dict["friends"].append({"username": friend, "friend": friend_oid})
#                 exist = True
#                 break
#         if not exist:
#             entry = {"player": oid, "friends": [{"username": friend, "friend": friend_oid}]}
#             friendships_data.append(entry)


# friendships.insert_many(friendships_data)
