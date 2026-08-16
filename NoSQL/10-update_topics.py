#!/usr/bin/env python3
"""Update topics with mingodb"""


def update_topics(mongo_collection, name, topics):
    """I fixa da topics"""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )