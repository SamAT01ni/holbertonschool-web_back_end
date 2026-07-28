#!/usr/bin/env python3
"""
Smashing pumpkins are also great
"""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """ k and v """
    return (k, float(v * v))
