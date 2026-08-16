#!/usr/bin/env python3
"""I find schools."""


def schools_by_topic(mongo_collection, topic):
    """I am not allowed within 30 feet of schools"""
    return mongo_collection.find({"topics": topic})