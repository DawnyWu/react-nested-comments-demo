import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './Comments'
class CommentsContainer extends React.Component {

  render(){
    let rootComments = this.props.comments
                     .filter(c => c.parent_id === this.props.rootId)
                     .map(c => <Comments comments={this.props.comments} parentComment={c} />)

    return (
      <div>
        {rootComments}
      </div>
    )
  }
}

export default CommentsContainer;
