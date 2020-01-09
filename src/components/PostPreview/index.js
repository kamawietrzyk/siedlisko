import React from 'react'
import pic1 from './pic1.jpg'
import './index.scss'

const PostPreview = ({ flip = false, title }) => (
  <div className={`post-preview bg-white ${flip && 'flipped'}`}>
    <img src={pic1} alt="pic1" />
    <div>
      <h2>Na początku był chaos... a potem było już tylko gorzej :) <br/>
        <small className="text-muted">08/01/2020</small>
      </h2>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. <strong className="read-more">&raquo;</strong>
      </p>
      <p className="tags">#ekologia #tagi #duperele</p>
    </div>
  </div>
)

export default PostPreview
