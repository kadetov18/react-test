import s from "./Feedback.module.css";

const Feedback = ({ feedbackList, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul className={s.wrrap}>
        <li className={s.feedItem}>
          <p className={s.feedDesc}>Good: {feedbackList.good}</p>
        </li>
        <li className={s.feedItem}>
          <p>Neutral: {feedbackList.neutral}</p>
        </li>
        <li className={s.feedItem}>
          <p>Bad: {feedbackList.bad}</p>
        </li>
        <li className={s.feedItem}>
          <p>Total: {totalFeedback}</p>
        </li>
        <li className={s.feedItem}>
          <p>Positive: {positiveFeedback}%</p>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
