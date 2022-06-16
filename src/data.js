let roomPricing = [
  { price: '19.95' },
  { price: '35.70' },
  { price: '40.95' },
  { price: '46.20' },
  { price: '51.45' },
  { price: '56.70' },
  { price: '61.95' },
  { price: '67.20' },
  { price: '72.45' },
  { price: '77.70' },
  { price: '79.80' },
  { price: '82.95' },
  { price: '88.20' },
  { price: '90.30' },
  { price: '93.45' },
  { price: '98.70' },
  { price: '100.80' },
  { price: '103.95' },
  { price: '103.95' },
  { price: '103.95' },
  { price: '114.45' },
  { price: '114.45' },
  { price: '114.45' },
  { price: '114.45' },
  { price: '124.95' },
  { price: '124.95' },
  { price: '124.95' },
  { price: '124.95' },
  { price: '124.95' },
  { price: '124.95' },
  { price: '135.45' },
  { price: '135.45' },
  { price: '135.45' },
  { price: '135.45' },
  { price: '135.45' },
  { price: '145.95' },
  { price: '145.95' },
  { price: '145.95' },
  { price: '145.95' },
  { price: '145.95' },
]

let propertyTypes = [
  { title: 'BnB / Guesthouse', dataId: 'bnb' },
  { title: 'Self Catering', dataId: 'self-catering' },
  { title: 'Small / Boutique Hotels', dataId: 'hotel' },
  { title: 'Campsites', dataId: 'campsite' },
  { title: 'Pubs / Inns', dataId: 'pub' },
]

export function getPricing() {
  return roomPricing
}

export function getPropertyTypes() {
  return propertyTypes
}
