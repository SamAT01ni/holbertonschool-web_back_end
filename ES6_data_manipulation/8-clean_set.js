export default function cleanSet(set, startString) {
  const values = Array.from(set)
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length));

  if (startString === '') {
    return '';
  }
  if (typeof startString !== 'string') {
    throw new TypeError('Must be string');
  }
  return values.join('-');
}
