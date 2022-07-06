export function roundToTwo(num) {
  return +(Math.round(num + 'e+2') + 'e-2')
}

export function calculateCampsitePricing(numRooms) {
  let campsiteTotalPrice = 25.0
  if (numRooms > 0 && numRooms < 25) {
    return (campsiteTotalPrice = parseFloat(25.0))
  } else if (numRooms > 24 && numRooms < 50) {
    return (campsiteTotalPrice = 50.0)
  } else if (numRooms > 49 && numRooms < 75) {
    return (campsiteTotalPrice = 75.0)
  } else {
    // eslint-disable-next-line no-unused-vars
    return (campsiteTotalPrice = 100.0)
  }
}

export function getDiscountedAmount(total) {
  return total - total * 0.1
}
