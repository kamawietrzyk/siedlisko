import React from 'react'
import pic1 from '../PostPreview/pic1.jpg'
import './index.scss'

const PostPage = () => (
  <div className="PostPage">
    <img src={pic1} alt="pic1" width="100%"/>
    <div className="PostPage__text">
      <p className="tag">#ekologia</p>
      <h1>Na początku był chaos</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in est faucibus, efficitur justo non, ultrices turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Integer quis lectus massa. Vestibulum vestibulum vulputate libero, et ornare tellus molestie vel. Nullam pulvinar rhoncus dui, blandit tincidunt nisi semper et. Aenean sollicitudin viverra nisi et varius. Duis pretium turpis eu finibus molestie. Cras sagittis ipsum eget fringilla tincidunt.</p>
      <p>
      Phasellus sodales nibh sed est semper, a tristique diam sodales. Sed interdum massa nec odio convallis venenatis. Ut ornare id lacus a venenatis. Etiam quam turpis, luctus ac volutpat non, rutrum varius sem. Nunc blandit dolor libero, ac varius felis finibus ac. Nam ut tortor eu dui mattis condimentum. Donec a est at nisl porttitor molestie. Sed bibendum iaculis tellus. Vivamus eu rutrum dui, et fringilla lacus. Sed imperdiet orci vitae ullamcorper volutpat. Donec viverra nulla quis ante fermentum, a viverra massa semper.</p>
      <p>
      Morbi ultricies auctor dui ac mattis. Nunc purus nibh, vehicula vitae ex pulvinar, pharetra pellentesque ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ante non dui lobortis laoreet vel ut dolor. Mauris ipsum mauris, auctor at finibus in, suscipit a dolor. Vivamus pellentesque augue hendrerit, interdum augue quis, tempor ipsum. Cras bibendum est ut ligula molestie, id pellentesque metus mollis. Ut sodales efficitur lorem, eget dictum erat cursus eget. Sed vitae risus elementum, dignissim nisl vel, sagittis nulla. Duis eget ullamcorper felis.</p>
      <p>
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus quam dui, mollis ut ipsum ac, rhoncus porttitor velit. Donec sodales elit vitae tempor elementum. Nullam ut nulla eget ipsum lacinia egestas ac vel magna. Curabitur euismod magna fringilla augue vulputate, a commodo diam interdum. Sed tincidunt hendrerit arcu semper pulvinar. Nulla sit amet porttitor eros. In dignissim arcu sed lorem mattis molestie. Pellentesque pellentesque velit ut vehicula iaculis. In vitae felis eu leo rutrum euismod ornare vel erat. Sed et neque ac est consectetur varius dapibus quis sem. Etiam faucibus neque nec neque varius, in fermentum mi elementum. Fusce in augue vitae magna malesuada imperdiet. Curabitur vitae lobortis sapien. Vivamus est odio, posuere fringilla ullamcorper quis, vulputate vulputate orci.</p>
      <p>
      Nulla facilisi. Duis tempor, tortor ac tristique dictum, risus purus lobortis justo, ac laoreet elit est scelerisque est. In hac habitasse platea dictumst. Duis pulvinar, odio vel efficitur finibus, mi elit finibus risus, vitae posuere tellus urna nec neque. Ut tempor, risus quis placerat vehicula, dolor ante pulvinar dolor, non varius mauris quam ut arcu. Morbi iaculis, nunc fringilla sollicitudin pulvinar, arcu erat aliquam ipsum, ut elementum justo lorem et ante. Sed semper, lorem non malesuada congue, neque est condimentum sapien, a tincidunt justo risus non ipsum. Integer nec dui auctor, porta enim et, pharetra est.
      </p>
    </div>
    <div className="PostPage__suggestion">
      <h2>Może Cię zainteresować</h2>
      <div className="PostPage__suggestion--posts">
        <div className="post-one">Post1</div>
        <div className="post-two">Post2</div>
        <div className="post-three">Post3</div>
      </div>
    </div>
  </div>
)

export default PostPage
