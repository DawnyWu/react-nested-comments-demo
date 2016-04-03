import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment'
import Comments from './Comments'
import CommentsContainer from './CommentsContainer'

class App extends React.Component {

  render() {
    let comments = [
      {
        'id':0,
        'parent_id': null,
        'content': '谢谢分享'
      },
      {
        'id':1,
        'parent_id':0,
        'content': '赞一个'
      },
      {
        'id':2,
        'parent_id':0,
        'content': '顶'
      },
      {
        'id':3,
        'parent_id':0,
        'content': '已点赞'
      },
      {
        'id':4,
        'parent_id':3,
        'content': '我也是哦'
      },
      {
        'id':5,
        'parent_id':0,
        'content': '加油！！！'
      },
      {
        'id':6,
        'parent_id':4,
        'content': '可以啊'
      },
      {
        'id':7,
        'parent_id': null,
        'content': '路过'
      } 
    ]

    return (
      <div>
        <CommentsContainer rootId={null} comments={comments}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));