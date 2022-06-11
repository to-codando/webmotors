export const repeat = (data, callback) => {
  if (!data || !Array.isArray(data) || !data.length) return ''
  return data.map(dataItem => callback(dataItem)).join('')
}
