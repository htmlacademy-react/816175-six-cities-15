import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';


function NotFound(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities: страница не найдена</title>
      </Helmet>

      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index page__main--index-empty">
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper">
                  <b className="cities__status">404</b>
                  <b className="cities__status">Ooops... Page not found :(</b>
                  <p className="cities__status-description"><Link to='/'><u>Go to main page</u></Link></p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default NotFound;
