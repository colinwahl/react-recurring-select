var React = require('react');
var DayOfWeekPicker = require('./DayOfWeekPicker.js');

var DayOfWeekOfMonthPicker = React.createClass({
  handleDayOfWeekChange: function(week, e) {
    var weeks = this.props.validations;
    var days = weeks[week];
    var day = parseInt(e.target.id);
    var index = days.indexOf(day);
    if (index > -1) {
      days.splice(index, 1);
    } else {
      days.push(day);
    }
    weeks[week] = days;
    this.props.onValidationsChange(weeks);
  },
  render: function() {
    var weeks = this.props.validations;
    return (
      <div>
        <div>
          <DayOfWeekPicker label="Week 1: " onDayChange={this.handleDayOfWeekChange.bind(null, 1)} active={weeks[1]} />
        </div>
        <div>
          <DayOfWeekPicker label="Week 2: " onDayChange={this.handleDayOfWeekChange.bind(null, 2)} active={weeks[2]} />
        </div>
        <div>
          <DayOfWeekPicker label="Week 3: " onDayChange={this.handleDayOfWeekChange.bind(null, 3)} active={weeks[3]} />
        </div>
        <div>
          <DayOfWeekPicker label="Week 4: " onDayChange={this.handleDayOfWeekChange.bind(null, 4)} active={weeks[4]} />
        </div>
      </div>
    );
  }
});

module.exports = DayOfWeekOfMonthPicker;
