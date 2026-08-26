export default function cleanSet(set, startString) {
  const values = Array.from(set)
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length));

  if (!startString || typeof startString !== 'string') {
    return '';
  }
  return values.join('-');
}
