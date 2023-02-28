import {
  commentIcon,
  editIcon,
  heartIcon,
  trashIcon,
} from "../../assets/icons/icons";
import thanosUrl from './thanos.jpg'

export default function Tweet() {
  return (
    <div className="tweet">
      <img className="tweet__avatar" src={thanosUrl} />
      <div className="tweet__content">
        <div className="tweet__body">
          <p className="tweet__info">
            <span className="text-bold">name</span>
            <span className="text">@username</span>
            <span className="text-s">10m</span>
          </p>
          <p className="tweet_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque interdum rutrum sodales. Nullam mattis fermentum
            libero, non volutpat.
          </p>
        </div>
        <div className="tweet__actions">
          <p>
            {" "}
            <i>{commentIcon}</i> 10 <i>{heartIcon}</i> 10
          </p>
          <p>
            <i>{trashIcon}</i> <i>{editIcon}</i>
          </p>
        </div>
      </div>
    </div>
  );
}
