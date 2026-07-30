#!/usr/bin/env python3
"""
comprehensions of async
Making it appear longer for the craic
"""

import asyncio
import random
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """ Comments bleh bleh bleh i make longer """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)