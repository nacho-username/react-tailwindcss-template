export function roundToTwo(num) {
  return +(Math.round(num + 'e+2') + 'e-2')
}

export function round(num) {
  var m = Number((Math.abs(num) * 100).toPrecision(20))
  return (Math.round(m) / 100) * Math.sign(num)
}
