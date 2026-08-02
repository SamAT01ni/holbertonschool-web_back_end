#!/usr/bin/env python3
"""
comprehensions of async. Making it appear longer for the craic.
I hate the checker
"""

import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Comments bleh bleh bleh i make longer. Yield random numbers"""
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)