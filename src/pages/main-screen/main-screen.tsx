import classNames from 'classnames';
import { useDocumentTitle } from '../../hooks/document-title';
import { Header } from '../../components/header/header';
import { Card } from '../../components/card/card';
import { mockOffer } from '../../mock/offer';
import { CITIES } from '../../constants/constants';
import { NavLink } from 'react-router-dom';

export type MainScreenProps = {
  resultCount: number;
}

function MainScreen({resultCount}: MainScreenProps): JSX.Element {
  useDocumentTitle('search results');

  const mockOffers = Array.from({length: resultCount}, mockOffer);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">

        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (
                <li key={city.name} className="locations__item">
                  <NavLink to={`/${city.slug}`} className={({isActive}) => classNames('locations__item-link tabs__item', {'tabs__item--active': isActive})}>
                    <span>{city.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          {/* Блок вставляется в случае, когда найдены офферы */}

          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{resultCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {mockOffers.map((item) => (
                  <Card key={item.id} environment="cities" {...item} />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>

          {/* Блок вставляется в случае, когда офферы не найдены */}
          {/* <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div> */}
        </div>
      </main>
    </div>
  );
}

export { MainScreen };
