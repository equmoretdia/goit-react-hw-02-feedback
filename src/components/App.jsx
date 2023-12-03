import React from 'react';

import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeadback = e => {
    // console.log(e.target);
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) =>
    good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad } = this.state) => {
    const total = good + neutral + bad;
    const percentage = total > 0 ? (good / total) * 100 : 0;
    return percentage.toFixed(2) + '%';
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <Section title="Please leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.addFeadback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positive}
        />
      </Section>
    );
  }
}

export default App;
