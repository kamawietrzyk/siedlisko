import React from 'react'
import posts from '../../config/posts'
import PostPreviewSmall from '../PostPreviewSmall'
import './index.scss'

const Posts = () => (
  <>
    <div className="Posts">
      {posts.map(({ title, pic, tag }, index) =>
        <PostPreviewSmall key={index} title={title} pic={pic} tag={tag} />)}
    </div>
    <div className="Posts__pagination">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </>
)

export default Posts
