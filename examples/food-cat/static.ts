export const CURRENCYS = [
  'USD',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'GBP',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'EUR',
  'MYR',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'MXN',
  'SGD',
  'AUD',
  'ILS',
  'KRW',
  'PLN',
]

export function formatPrice(price: string, exchangeRate: number) {
  return (parseFloat(price) * exchangeRate).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}

export interface Restaurant {
  id: string
  name: string
  phoneNumber: string
  address: string
  dishes: Dish[]
}

export interface Dish {
  name: string
  description?: string
  price: string
  remaining: number
  imageUrl?: string
}
