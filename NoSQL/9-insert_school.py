#!/usr/bin/env python3
"""Insert new doc into collection"""


def insert_school(mongo_collection, **kwargs):
    """Add the doc in"""
    add = mongo_collection.insert_one(kwargs)
    return add.inserted_id
