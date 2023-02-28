import thanosUrl from '../../assets/images/thanos.jpg'

export default function TweetFrom() {
  return (
    <div className="tweet-form">
      <img className="tweet-form__avatar" src={thanosUrl} />
      <div className="tweet-form__content">
        <textarea className="tweet-form-textarea" placeholder="Remember to think before you write"></textarea>
        <button className="button">Tweet</button>
      </div>
    </div>
  );
}
