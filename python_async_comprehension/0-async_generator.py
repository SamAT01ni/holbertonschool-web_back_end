#!/usr/bin/env python3
"""
comprehensions of async
"""

import asyncio
import random


async def async_generator():
    """ Comments bleh """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
