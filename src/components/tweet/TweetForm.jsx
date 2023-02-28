import thanosUrl from './thanos.jpg'

export default function TweetFrom() {
  return (
    <div className="tweet-form">
      <img className="tweet-form__avatar" src={thanosUrl} />
      <div className="tweet-form__content">
        <input className="text-input" placeholder="Placeholder"></input>
        <button className="button">Tweet</button>
      </div>
    </div>
  );
}
