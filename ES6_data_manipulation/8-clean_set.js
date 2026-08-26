export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const values = Array.from(set)
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length));

  return values.join('-');
}
