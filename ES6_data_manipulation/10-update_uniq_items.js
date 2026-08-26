export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (let[key, val] of map) {
    if (val === 1) {
      val = 100;
      map.set(key, val);
    }
  }

  return map;
}
