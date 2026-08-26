export default function cleanSet(set, startString) {
  const values = Array.from(set)
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length));

  return values.join('-');
}
