#!/usr/bin/env python3
"""
Index range returning 2 tuples containing a start index and end index
"""

def index_range(page: int, page_size: int) -> tuple:
    """Takes integer arguments"""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)