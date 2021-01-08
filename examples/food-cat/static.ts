export enum CURRENCY_SYMBOLS {
  '$' = '$',
  '£' = '£',
  '¥' = '¥',
}

export function formatPriceWithCurrencySymbol(price: string, currencySymbol: CURRENCY_SYMBOLS) {
  return currencySymbol + price
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
