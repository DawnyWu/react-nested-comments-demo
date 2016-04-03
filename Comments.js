import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment'

class Comments extends React.Component {

  render(){
    let comments = this.props.comments
                   .filter(c => c.parent_id === this.props.parentComment.id)
    console.log('comments:'+ JSON.stringify(comments))

    let parentComment = this.props.parentComment
    console.log('parentComment:'+ JSON.stringify(parentComment))

    let childrenComments = comments.map( (c) => {
      return (<Comments key={c.id} parentComment={c} comments={this.props.comments}/>) 
    })
    // console.log("childrenComments:" + JSON.stringify(childrenComments))
    console.log("childrenComments:" + childrenComments.length)

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
