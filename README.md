react-nested-comments-demo
===
一个react实现的评论盖楼的例子

## 本地运行
```js
git clone https://github.com/DawnyWu/react-nested-comments-demo.git
cd react-nested-comments-demo
npm install
npm start
```
在浏览器中打开 http://localhost:3001 即可查看例子

## 数据格式
每个 `comment` 有 `id` 和 `parentId`

最顶层的`comment`的`parentId`为`null`
```js
    let comments = [
      {
        'id':0,
        'parentId': null,
        'content': '谢谢分享'
      },
      {
        'id':1,
        'parentId':0,
        'content': '赞一个'
      },
      {
        'id':2,
        'parentId':0,
        'content': '顶'
      },
      {
        'id':3,
        'parentId':0,
        'content': '已点赞'
      },
      {
        'id':4,
        'parentId':3,
        'content': '我也是哦'
      },
      {
        'id':5,
        'parentId':0,
        'content': '加油！！！'
      },
      {
        'id':6,
        'parentId':4,
        'content': '可以啊'
      },
      {
        'id':7,
        'parentId': null,
        'content': '路过'
      } 
    ]
```

### 实现效果
![react-nested-comments-demo](https://raw.githubusercontent.com/DawnyWu/react-nested-comments-demo/master/comments.png)


# License

 MIT


