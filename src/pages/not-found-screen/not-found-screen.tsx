import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks/document-title';
import { Header } from '../../components/header/header';
import style from './not-found.module.css';
import classNames from 'classnames';


function NotFoundScreen(): JSX.Element {
  useDocumentTitle('page not found');

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper not-found">
                <b className={classNames('cities__status', `${style.title}`)}>404</b>
                <b className={classNames('cities__status', `${style.status}`)}>Ooops... Page not found :(</b>
                <p className="cities__status-description"><Link to='/'><u>Go to main page</u></Link></p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { NotFoundScreen };
