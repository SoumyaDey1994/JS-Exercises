var React = require('react');
var ReactDOM = require('react-dom');
var Checkbox = require('./CheckBox') ;


var Task = React.createClass({

    render: function() {
        var tasks = this.props.taskList;
        var taskList = tasks.map(function (task) {
            return (
                <div key={task.id} className="checkbox">
                    <Checkbox
                        taskList = {task}
                    />
                 </div>
            );
        });
        return  <div className="chkbxGroup">{taskList}</div>;
    }
});

module.exports = Task;
