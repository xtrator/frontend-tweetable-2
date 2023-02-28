import {
  commentIcon,
  editIcon,
  heartIcon,
  trashIcon,
} from "../../assets/icons/icons";
import thanosUrl from '../../assets/images/thanos.jpg'

export default function Tweet({tweetContent}) {
  if (tweetContent == null) {
    tweetContent = {
      username: "name",
      at_name: "@username",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque inter rutrum sodales. Nullam mattis fermentumlibero, non volutpat.",
      likes: 10,
      replies: 10,
    }
  }
  const {username, at_name, description, likes, replies} = tweetContent;

  return (
    <div className="tweet">
      <img className="tweet__avatar" src={thanosUrl} />
      <div className="tweet__content">
        <div className="tweet__body">
          <p className="tweet__info">
            <span className="text-bold">{username}</span>
            <span className="text">{at_name}</span>
            <span className="text-s">10m</span>
          </p>
          <p className="tweet_text">
            {description}
          </p>
        </div>
        <div className="tweet__actions">
          <p>
            {" "}
            <i>{commentIcon}</i> {replies} <i>{heartIcon}</i> {likes}
          </p>
          <p>
            <i>{trashIcon}</i> <i>{editIcon}</i>
          </p>
        </div>
      </div>
    </div>
  );
}
