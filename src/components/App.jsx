import React from 'react';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeadback = e => {
    console.log(e.target);
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) =>
    good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad } = this.state) =>
    (good / (good + neutral + bad)) * 100;

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <section className="section">
        <h2>Please leave your feedback</h2>
        <div>
          <button type="button" name="good" onClick={this.addFeadback}>
            Good
          </button>
          <button type="button" name="neutral" onClick={this.addFeadback}>
            Neutral
          </button>
          <button type="button" name="bad" onClick={this.addFeadback}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positive}%</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
