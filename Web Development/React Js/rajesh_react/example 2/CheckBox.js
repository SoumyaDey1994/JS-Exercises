var React = require('react');
var ReactDOM = require('react-dom');

var checkboxes = React.createClass({
    getInitialState() {
      return {
        checked: this.props.taskList.done
      };
    },

    handleStateChange() {
        this.setState({ checked: !this.state.checked });
    },

    render: function() {
        return (
            <label>
            <input
                className = 'Checkbox'
                type = 'checkbox'
                id={this.props.taskList.id}
                value = {this.props.taskList.name}
                checked={this.state.checked}
                onChange={this.handleStateChange} checked={this.state.checked}
            />
            {this.props.taskList.name}
          </label>
        );

    }
});

module.exports = checkboxes;
