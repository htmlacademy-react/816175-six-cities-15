type CardProps = {
  environment: string;
  name: string;
  type: string;
  link: string;
  price: number;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  img: string;
}

function Card(props: CardProps) {
  const img = {
    width: props.environment === 'cities' ? 260 : 150,
    height: props.environment === 'cities' ? 200 : 110
  };

  return (
    <article className={`${props.environment}__card place-card`}>
      {props.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}

      <div className={`${props.environment}__image-wrapper place-card__image-wrapper`}>
        <a href={props.link}>
          <img className="place-card__image" src={props.img} width={img.width} height={img.height} alt={props.name} />
        </a>
      </div>
      <div className={`${props.environment}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${props.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${props.rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={props.link}>{props.name}</a>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}

export default Card;
