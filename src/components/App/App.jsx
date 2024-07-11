import Aplication from "../Aplication/Aplication";
import Description from "../Description/Description";
import "reset-css/reset.css";
import images from "../data/media.json";
import s from "./App.module.css";
import Feedback from "../Feedback/Feedback";
import { useState } from "react";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import React, { useEffect } from "react";
const App = () => {
  const [feedbackList, setFeedbackList] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedFeedback = localStorage.getItem("feedbackList");
    if (savedFeedback) {
      setFeedbackList(JSON.parse(savedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedbackList", JSON.stringify(feedbackList));
  }, [feedbackList]);

  const handleFeedback = (option) => {
    setFeedbackList((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  };

  const totalFeedback =
    feedbackList.good + feedbackList.neutral + feedbackList.bad;

  const positiveFeedback =
    totalFeedback === 0
      ? 0
      : Math.round((feedbackList.good / totalFeedback) * 100);

  const resetFeedback = () => {
    const resetState = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    setFeedbackList(resetState);
  };

  const hasFeedback = totalFeedback > 0;

  return (
    <>
      <div className={s.wrraper}>
        <div className={s.card}>
          <Aplication images={images} />
          <Description />
          <Options
            handleFeedback={handleFeedback}
            resetFeedback={resetFeedback}
            totalFeedback={totalFeedback}
          />
          {hasFeedback ? (
            <Feedback
              feedbackList={feedbackList}
              totalFeedback={totalFeedback}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification message="No feedbacks yet" />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
