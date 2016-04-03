import React from 'react';
import ReactDOM from 'react-dom';

class Comment extends React.Component {

  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <span>{this.props.comment.content}</span>
        </div>
      </div>
    )
  }
}

export default Comment;
