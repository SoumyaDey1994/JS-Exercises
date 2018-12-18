var React = require('react');
var ReactDOM = require('react-dom');
var TaskLists = require('./TaskList') ;


var NoticeBoardTaskList = React.createClass({
    render: function() {
        var tasks = this.props.cards;
        var nbTasksList = tasks.map(function (task) {
            return (
                <div key={task.id} className="col-md-4">
                    <p className="h4 taskStatus">{task.status}</p>
                    <div className="tasksDiv">
                    <span className="glyphicon glyphicon-triangle-right"></span>
                    <span className="taskTitle">{task.title}</span>
                    <p className="taskDesc">{task.description}</p>
                    <TaskLists taskList={task.tasks} />
                 </div>
                    </div>
            );
        });
        return  <div className="container"><div className="row">{nbTasksList}</div></div>;
    }
});

module.exports = NoticeBoardTaskList;

