export const APP_NAME = '6 cities';

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Main = '/',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth,
  NoAuth,
  Unknown
}

export const CITIES = [
  { name: 'Paris', slug: 'paris' },
  { name: 'Cologne', slug: 'cologne' },
  { name: 'Brussels', slug: 'brussels' },
  { name: 'Amsterdam', slug: 'amsterdam' },
  { name: 'Hamburg', slug: 'hamburg' },
  { name: 'Dusseldorf', slug: 'dusseldorf' }
] as const;

export const OFFER_TYPES = [
  'Apartment',
  'Room',
  'House',
  'Hotel'
] as const;
