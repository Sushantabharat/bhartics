export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100

// converted doc to object
export function convertDocToObj(doc: any) {
  doc._id = doc._id.toString()
  return doc
}
