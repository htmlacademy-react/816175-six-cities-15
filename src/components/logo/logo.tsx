import { Link, useLocation } from 'react-router-dom';
import { CITIES } from '../../constants/constants';

const cityLinks = CITIES.map((city) => (`/${city.slug}`));
const logoImg = <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />;

function Logo () {
  const needLinkToMain = !cityLinks.includes(useLocation().pathname);
  if (needLinkToMain) {
    return (<Link to='/' className='header__logo-link'>{logoImg}</Link>);
  } else {
    return (<a className='header__logo-link header__logo-link--active'>{logoImg}</a>);
  }
}
export { Logo };
