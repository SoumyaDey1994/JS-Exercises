import React from 'react';

class Component1 extends React.Component{
    constructor(props){
            super(props);
            this.state = {counter: 0};
    }

    updateStateVariable(){
        var count=this.state.counter;
        setInterval(function(){
            count+=1;
            this.state.counter=count
        }, 1000)
        
    }
    render(){
        return(
            <div>
                <h1>Hi, I am {this.props.authorName}</h1>
                <h3>This is my First React Application</h3>
                <h4>Here is the Counter: {this.state.counter}</h4>
            </div>
        )
    }
}

export default Component1;