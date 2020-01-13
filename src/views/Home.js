import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import PostPreview from '../components/PostPreview'

const posts = [
  {
    title: 'Post próbny trzeci',
    pic: require('../components/PostPreview/pic3.jpg'),
    text: 'Nunc mattis gravida quam, a tristique nibh sodales sit amet. Praesent eu imperdiet elit. Praesent non rutrum nulla, quis hendrerit lectus. Proin laoreet nibh ut pulvinar tempor. Aliquam augue dui, pretium et nunc eu, fringilla accumsan ligula. ',
    date: '11/01/2020',
    tag: '#niewiemocochodzi'
  },
  {
    title: 'Post drugi, nie ostatni',
    pic: require('../components/PostPreview/pic2.jpg'),
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. ',
    date: '10/01/2020',
    tag: '#drugipost'
  },
  {
    title: 'Na początku był chaos',
    pic: require('../components/PostPreview/pic1.jpg'),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    date: '09/01/2020',
    tag: '#ekologia'
  }
]

const HomeView = () => (
  <>
    <div className="container p-0">
      <ScrollToTop />
      {posts.map(({ title, pic, text, date, tag }, index) => <PostPreview key={index} flip={index % 2} title={title} pic={pic} text={text} date={date} tag={tag} />)}
    </div>
  </>
)

export default HomeView
