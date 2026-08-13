#!/usr/bin/env python3
"""List all docs"""


def list_all(mongo_collection):
    """Return all the docs"""
    return list(mongo_collection.find())
