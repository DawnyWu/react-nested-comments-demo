import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment'

class Comments extends React.Component {

  render(){
    let comments = this.props.comments
                   .filter(c => c.parentId === this.props.parentComment.id)

    let parentComment = this.props.parentComment

    let childrenComments = comments.map( (c) => {
      return (<Comments key={c.id} parentComment={c} comments={this.props.comments}/>) 
    })

    if(childrenComments.length === 0){
      return(
        <div>
          <Comment comment={parentComment}/>
        </div>
      )
    }else{
      return (
        <div>
          <Comment comment={parentComment}/>
          <div style={{'margin-left': '40px'}}>{childrenComments}</div>
        </div>
      )
    }
  }
}

export default Comments;
