import React from 'react'
import './index.scss'
import PostPreviewSmall from '../PostPreviewSmall'
import posts from '../../config/posts'

const PostPage = ({ selectedPost }) => (
  <div className="PostPage">
    <img src={selectedPost.pic} alt="pic1" width="100%" />
    <div className="PostPage__text">
      <p className="tag">{selectedPost.tag}</p>
      <h1>{selectedPost.title}</h1>
      <h3 className="text-muted">{selectedPost.date}</h3>
      <div>{selectedPost.textLong}</div>
    </div>
    <div className="PostPage__suggestion">
      <h2>Może Cię zainteresować</h2>
      <div className="PostPage__suggestion--posts">
        {posts.slice(0, 3).map(({ title, tag, pic }, index) =>
          <PostPreviewSmall key={index} title={title} tag={tag} pic={pic} />
        )}
      </div>
    </div>
  </div>
)

export default PostPage
