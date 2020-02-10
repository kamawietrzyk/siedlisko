import React from 'react'
import pic2 from '../components/PostPreview/pic2.jpg'
import pic3 from '../components/PostPreview/pic3.jpg'
import pic4 from '../components/PostPreview/pic4.jpg'
import pic5 from '../components/PostPreview/pic5.jpg'
import pic6 from '../components/PostPreview/pic6.jpg'
import pic7 from '../components/PostPreview/pic7.jpg'

const posts = [
  {
    title: 'Zima w ogrodzie',
    pic: pic7,
    path: 'zima-w-ogrodzie',
    textShort: 'Nunc mattis gravida quam, a tristique nibh sodales sit amet. Praesent eu imperdiet elit. Praesent non rutrum nulla, quis hendrerit lectus. Proin laoreet nibh ut pulvinar tempor. Aliquam augue dui, pretium et nunc eu, fringilla accumsan ligula. ',
    textLong:
    <>
      <p>
    Phasellus sodales nibh sed est semper, a tristique diam sodales. Sed interdum massa nec odio convallis venenatis. Ut ornare id lacus a venenatis. Etiam quam turpis, luctus ac volutpat non, rutrum varius sem. Nunc blandit dolor libero, ac varius felis finibus ac. Nam ut tortor eu dui mattis condimentum. Donec a est at nisl porttitor molestie. Sed bibendum iaculis tellus. Vivamus eu rutrum dui, et fringilla lacus. Sed imperdiet orci vitae ullamcorper volutpat. Donec viverra nulla quis ante fermentum, a viverra massa semper.</p>
      <p>
    Morbi ultricies auctor dui ac mattis. Nunc purus nibh, vehicula vitae ex pulvinar, pharetra pellentesque ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ante non dui lobortis laoreet vel ut dolor. Mauris ipsum mauris, auctor at finibus in, suscipit a dolor. Vivamus pellentesque augue hendrerit, interdum augue quis, tempor ipsum. Cras bibendum est ut ligula molestie, id pellentesque metus mollis. Ut sodales efficitur lorem, eget dictum erat cursus eget. Sed vitae risus elementum, dignissim nisl vel, sagittis nulla. Duis eget ullamcorper felis.</p>
      <p>
    Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus quam dui, mollis ut ipsum ac, rhoncus porttitor velit. Donec sodales elit vitae tempor elementum. Nullam ut nulla eget ipsum lacinia egestas ac vel magna. Curabitur euismod magna fringilla augue vulputate, a commodo diam interdum. Sed tincidunt hendrerit arcu semper pulvinar. Nulla sit amet porttitor eros. In dignissim arcu sed lorem mattis molestie. Pellentesque pellentesque velit ut vehicula iaculis. In vitae felis eu leo rutrum euismod ornare vel erat. Sed et neque ac est consectetur varius dapibus quis sem. Etiam faucibus neque nec neque varius, in fermentum mi elementum. Fusce in augue vitae magna malesuada imperdiet. Curabitur vitae lobortis sapien. Vivamus est odio, posuere fringilla ullamcorper quis, vulputate vulputate orci.</p>
      <img src={pic2} alt="pic" width="50%" className="my-4" />
    </>,
    date: '02/02/2020',
    tag: '#zimazimapiaskunima'
  },
  {
    title: 'Wiosna!',
    pic: pic6,
    path: 'wiosna',
    textShort: 'Nunc mattis gravida quam, a tristique nibh sodales sit amet. Praesent eu imperdiet elit. Praesent non rutrum nulla, quis hendrerit lectus. Proin laoreet nibh ut pulvinar tempor. Aliquam augue dui, pretium et nunc eu, fringilla accumsan ligula. ',
    textLong:
    <>
      <p>
    Phasellus sodales nibh sed est semper, a tristique diam sodales. Sed interdum massa nec odio convallis venenatis. Ut ornare id lacus a venenatis. Etiam quam turpis, luctus ac volutpat non, rutrum varius sem. Nunc blandit dolor libero, ac varius felis finibus ac. Nam ut tortor eu dui mattis condimentum. Donec a est at nisl porttitor molestie. Sed bibendum iaculis tellus. Vivamus eu rutrum dui, et fringilla lacus. Sed imperdiet orci vitae ullamcorper volutpat. Donec viverra nulla quis ante fermentum, a viverra massa semper.</p>
      <p>
    Morbi ultricies auctor dui ac mattis. Nunc purus nibh, vehicula vitae ex pulvinar, pharetra pellentesque ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ante non dui lobortis laoreet vel ut dolor. Mauris ipsum mauris, auctor at finibus in, suscipit a dolor. Vivamus pellentesque augue hendrerit, interdum augue quis, tempor ipsum. Cras bibendum est ut ligula molestie, id pellentesque metus mollis. Ut sodales efficitur lorem, eget dictum erat cursus eget. Sed vitae risus elementum, dignissim nisl vel, sagittis nulla. Duis eget ullamcorper felis.</p>
      <p>
    Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus quam dui, mollis ut ipsum ac, rhoncus porttitor velit. Donec sodales elit vitae tempor elementum. Nullam ut nulla eget ipsum lacinia egestas ac vel magna. Curabitur euismod magna fringilla augue vulputate, a commodo diam interdum. Sed tincidunt hendrerit arcu semper pulvinar. Nulla sit amet porttitor eros. In dignissim arcu sed lorem mattis molestie. Pellentesque pellentesque velit ut vehicula iaculis. In vitae felis eu leo rutrum euismod ornare vel erat. Sed et neque ac est consectetur varius dapibus quis sem. Etiam faucibus neque nec neque varius, in fermentum mi elementum. Fusce in augue vitae magna malesuada imperdiet. Curabitur vitae lobortis sapien. Vivamus est odio, posuere fringilla ullamcorper quis, vulputate vulputate orci.</p>
      <img src={pic6} alt="pic" width="50%" className="my-4" />
    </>,
    date: '11/01/2020',
    tag: '#wiosnaprzyszła'
  },
  {
    title: 'Cztery i pół marchewki',
    pic: pic5,
    path: 'cztery-i-pol-marchewki',
    textShort: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. ',
    textLong:
    <>
      <p>
    Phasellus sodales nibh sed est semper, a tristique diam sodales. Sed interdum massa nec odio convallis venenatis. Ut ornare id lacus a venenatis. Etiam quam turpis, luctus ac volutpat non, rutrum varius sem. Nunc blandit dolor libero, ac varius felis finibus ac. Nam ut tortor eu dui mattis condimentum. Donec a est at nisl porttitor molestie. Sed bibendum iaculis tellus. Vivamus eu rutrum dui, et fringilla lacus. Sed imperdiet orci vitae ullamcorper volutpat. Donec viverra nulla quis ante fermentum, a viverra massa semper.</p>
      <p>
    Morbi ultricies auctor dui ac mattis. Nunc purus nibh, vehicula vitae ex pulvinar, pharetra pellentesque ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ante non dui lobortis laoreet vel ut dolor. Mauris ipsum mauris, auctor at finibus in, suscipit a dolor. Vivamus pellentesque augue hendrerit, interdum augue quis, tempor ipsum. Cras bibendum est ut ligula molestie, id pellentesque metus mollis. Ut sodales efficitur lorem, eget dictum erat cursus eget. Sed vitae risus elementum, dignissim nisl vel, sagittis nulla. Duis eget ullamcorper felis.</p>
      <p>
    Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus quam dui, mollis ut ipsum ac, rhoncus porttitor velit. Donec sodales elit vitae tempor elementum. Nullam ut nulla eget ipsum lacinia egestas ac vel magna. Curabitur euismod magna fringilla augue vulputate, a commodo diam interdum. Sed tincidunt hendrerit arcu semper pulvinar. Nulla sit amet porttitor eros. In dignissim arcu sed lorem mattis molestie. Pellentesque pellentesque velit ut vehicula iaculis. In vitae felis eu leo rutrum euismod ornare vel erat. Sed et neque ac est consectetur varius dapibus quis sem. Etiam faucibus neque nec neque varius, in fermentum mi elementum. Fusce in augue vitae magna malesuada imperdiet. Curabitur vitae lobortis sapien. Vivamus est odio, posuere fringilla ullamcorper quis, vulputate vulputate orci.</p>
      <img src={pic5} alt="pic" width="50%" className="my-3" />
    </>,
    date: '10/01/2020',
    tag: '#marchewdajemoc'
  },
  {
    title: 'Słów kilka o motylkach',
    pic: pic4,
    path: 'slow-kilka-o-motylkach',
    textShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    textLong:
    <>
      <p>
    Phasellus sodales nibh sed est semper, a tristique diam sodales. Sed interdum massa nec odio convallis venenatis. Ut ornare id lacus a venenatis. Etiam quam turpis, luctus ac volutpat non, rutrum varius sem. Nunc blandit dolor libero, ac varius felis finibus ac. Nam ut tortor eu dui mattis condimentum. Donec a est at nisl porttitor molestie. Sed bibendum iaculis tellus. Vivamus eu rutrum dui, et fringilla lacus. Sed imperdiet orci vitae ullamcorper volutpat. Donec viverra nulla quis ante fermentum, a viverra massa semper.</p>
      <p>
    Morbi ultricies auctor dui ac mattis. Nunc purus nibh, vehicula vitae ex pulvinar, pharetra pellentesque ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ante non dui lobortis laoreet vel ut dolor. Mauris ipsum mauris, auctor at finibus in, suscipit a dolor. Vivamus pellentesque augue hendrerit, interdum augue quis, tempor ipsum. Cras bibendum est ut ligula molestie, id pellentesque metus mollis. Ut sodales efficitur lorem, eget dictum erat cursus eget. Sed vitae risus elementum, dignissim nisl vel, sagittis nulla. Duis eget ullamcorper felis.</p>
      <p>
    Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus quam dui, mollis ut ipsum ac, rhoncus porttitor velit. Donec sodales elit vitae tempor elementum. Nullam ut nulla eget ipsum lacinia egestas ac vel magna. Curabitur euismod magna fringilla augue vulputate, a commodo diam interdum. Sed tincidunt hendrerit arcu semper pulvinar. Nulla sit amet porttitor eros. In dignissim arcu sed lorem mattis molestie. Pellentesque pellentesque velit ut vehicula iaculis. In vitae felis eu leo rutrum euismod ornare vel erat. Sed et neque ac est consectetur varius dapibus quis sem. Etiam faucibus neque nec neque varius, in fermentum mi elementum. Fusce in augue vitae magna malesuada imperdiet. Curabitur vitae lobortis sapien. Vivamus est odio, posuere fringilla ullamcorper quis, vulputate vulputate orci.</p>
      <img src={pic4} alt="pic" width="50%" className="my-3" />
      <p>
    Nulla facilisi. Duis tempor, tortor ac tristique dictum, risus purus lobortis justo, ac laoreet elit est scelerisque est. In hac habitasse platea dictumst. Duis pulvinar, odio vel efficitur finibus, mi elit finibus risus, vitae posuere tellus urna nec neque. Ut tempor, risus quis placerat vehicula, dolor ante pulvinar dolor, non varius mauris quam ut arcu. Morbi iaculis, nunc fringilla sollicitudin pulvinar, arcu erat aliquam ipsum, ut elementum justo lorem et ante. Sed semper, lorem non malesuada congue, neque est condimentum sapien, a tincidunt justo risus non ipsum. Integer nec dui auctor, porta enim et, pharetra est.
      </p>
    </>,
    date: '09/01/2020',
    tag: '#motyl'
  },
  {
    title: 'Post próbny trzeci',
    pic: require('../components/PostPreview/pic3.jpg'),
    path: 'post-probny-trzeci',
    textShort: 'Nunc mattis gravida quam, a tristique nibh sodales sit amet. Praesent eu imperdiet elit. Praesent non rutrum nulla, quis hendrerit lectus. Proin laoreet nibh ut pulvinar tempor. Aliquam augue dui, pretium et nunc eu, fringilla accumsan ligula. ',
    textLong:
    <>
      <p>
    Phasellus sodales nibh sed est semper, a tristique diam sodales. Sed interdum massa nec odio convallis venenatis. Ut ornare id lacus a venenatis. Etiam quam turpis, luctus ac volutpat non, rutrum varius sem. Nunc blandit dolor libero, ac varius felis finibus ac. Nam ut tortor eu dui mattis condimentum. Donec a est at nisl porttitor molestie. Sed bibendum iaculis tellus. Vivamus eu rutrum dui, et fringilla lacus. Sed imperdiet orci vitae ullamcorper volutpat. Donec viverra nulla quis ante fermentum, a viverra massa semper.</p>
      <p>
    Morbi ultricies auctor dui ac mattis. Nunc purus nibh, vehicula vitae ex pulvinar, pharetra pellentesque ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ante non dui lobortis laoreet vel ut dolor. Mauris ipsum mauris, auctor at finibus in, suscipit a dolor. Vivamus pellentesque augue hendrerit, interdum augue quis, tempor ipsum. Cras bibendum est ut ligula molestie, id pellentesque metus mollis. Ut sodales efficitur lorem, eget dictum erat cursus eget. Sed vitae risus elementum, dignissim nisl vel, sagittis nulla. Duis eget ullamcorper felis.</p>
      <p>
    Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus quam dui, mollis ut ipsum ac, rhoncus porttitor velit. Donec sodales elit vitae tempor elementum. Nullam ut nulla eget ipsum lacinia egestas ac vel magna. Curabitur euismod magna fringilla augue vulputate, a commodo diam interdum. Sed tincidunt hendrerit arcu semper pulvinar. Nulla sit amet porttitor eros. In dignissim arcu sed lorem mattis molestie. Pellentesque pellentesque velit ut vehicula iaculis. In vitae felis eu leo rutrum euismod ornare vel erat. Sed et neque ac est consectetur varius dapibus quis sem. Etiam faucibus neque nec neque varius, in fermentum mi elementum. Fusce in augue vitae magna malesuada imperdiet. Curabitur vitae lobortis sapien. Vivamus est odio, posuere fringilla ullamcorper quis, vulputate vulputate orci.</p>
      <img src={pic2} alt="pic2" width="50%" className="my-4" />
    </>,
    date: '11/01/2020',
    tag: '#niewiemocochodzi'
  },
  {
    title: 'Post drugi, nie ostatni',
    pic: require('../components/PostPreview/pic2.jpg'),
    path: 'post-drugi-nie-ostatni',
    textShort: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. ',
    textLong:
    <>
      <p>
    Phasellus sodales nibh sed est semper, a tristique diam sodales. Sed interdum massa nec odio convallis venenatis. Ut ornare id lacus a venenatis. Etiam quam turpis, luctus ac volutpat non, rutrum varius sem. Nunc blandit dolor libero, ac varius felis finibus ac. Nam ut tortor eu dui mattis condimentum. Donec a est at nisl porttitor molestie. Sed bibendum iaculis tellus. Vivamus eu rutrum dui, et fringilla lacus. Sed imperdiet orci vitae ullamcorper volutpat. Donec viverra nulla quis ante fermentum, a viverra massa semper.</p>
      <p>
    Morbi ultricies auctor dui ac mattis. Nunc purus nibh, vehicula vitae ex pulvinar, pharetra pellentesque ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ante non dui lobortis laoreet vel ut dolor. Mauris ipsum mauris, auctor at finibus in, suscipit a dolor. Vivamus pellentesque augue hendrerit, interdum augue quis, tempor ipsum. Cras bibendum est ut ligula molestie, id pellentesque metus mollis. Ut sodales efficitur lorem, eget dictum erat cursus eget. Sed vitae risus elementum, dignissim nisl vel, sagittis nulla. Duis eget ullamcorper felis.</p>
      <p>
    Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus quam dui, mollis ut ipsum ac, rhoncus porttitor velit. Donec sodales elit vitae tempor elementum. Nullam ut nulla eget ipsum lacinia egestas ac vel magna. Curabitur euismod magna fringilla augue vulputate, a commodo diam interdum. Sed tincidunt hendrerit arcu semper pulvinar. Nulla sit amet porttitor eros. In dignissim arcu sed lorem mattis molestie. Pellentesque pellentesque velit ut vehicula iaculis. In vitae felis eu leo rutrum euismod ornare vel erat. Sed et neque ac est consectetur varius dapibus quis sem. Etiam faucibus neque nec neque varius, in fermentum mi elementum. Fusce in augue vitae magna malesuada imperdiet. Curabitur vitae lobortis sapien. Vivamus est odio, posuere fringilla ullamcorper quis, vulputate vulputate orci.</p>
      <img src={pic3} alt="pic" width="50%" className="my-3" />
    </>,
    date: '10/01/2020',
    tag: '#drugipost'
  },
  {
    title: 'Na początku był chaos',
    pic: require('../components/PostPreview/pic1.jpg'),
    path: 'na-poczatku-byl-chaos',
    textShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    textLong:
    <>
      <p>
    Phasellus sodales nibh sed est semper, a tristique diam sodales. Sed interdum massa nec odio convallis venenatis. Ut ornare id lacus a venenatis. Etiam quam turpis, luctus ac volutpat non, rutrum varius sem. Nunc blandit dolor libero, ac varius felis finibus ac. Nam ut tortor eu dui mattis condimentum. Donec a est at nisl porttitor molestie. Sed bibendum iaculis tellus. Vivamus eu rutrum dui, et fringilla lacus. Sed imperdiet orci vitae ullamcorper volutpat. Donec viverra nulla quis ante fermentum, a viverra massa semper.</p>
      <p>
    Morbi ultricies auctor dui ac mattis. Nunc purus nibh, vehicula vitae ex pulvinar, pharetra pellentesque ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ante non dui lobortis laoreet vel ut dolor. Mauris ipsum mauris, auctor at finibus in, suscipit a dolor. Vivamus pellentesque augue hendrerit, interdum augue quis, tempor ipsum. Cras bibendum est ut ligula molestie, id pellentesque metus mollis. Ut sodales efficitur lorem, eget dictum erat cursus eget. Sed vitae risus elementum, dignissim nisl vel, sagittis nulla. Duis eget ullamcorper felis.</p>
      <p>
    Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus quam dui, mollis ut ipsum ac, rhoncus porttitor velit. Donec sodales elit vitae tempor elementum. Nullam ut nulla eget ipsum lacinia egestas ac vel magna. Curabitur euismod magna fringilla augue vulputate, a commodo diam interdum. Sed tincidunt hendrerit arcu semper pulvinar. Nulla sit amet porttitor eros. In dignissim arcu sed lorem mattis molestie. Pellentesque pellentesque velit ut vehicula iaculis. In vitae felis eu leo rutrum euismod ornare vel erat. Sed et neque ac est consectetur varius dapibus quis sem. Etiam faucibus neque nec neque varius, in fermentum mi elementum. Fusce in augue vitae magna malesuada imperdiet. Curabitur vitae lobortis sapien. Vivamus est odio, posuere fringilla ullamcorper quis, vulputate vulputate orci.</p>
      <img src={pic5} alt="pic" width="50%" className="my-3" />
      <p>
    Nulla facilisi. Duis tempor, tortor ac tristique dictum, risus purus lobortis justo, ac laoreet elit est scelerisque est. In hac habitasse platea dictumst. Duis pulvinar, odio vel efficitur finibus, mi elit finibus risus, vitae posuere tellus urna nec neque. Ut tempor, risus quis placerat vehicula, dolor ante pulvinar dolor, non varius mauris quam ut arcu. Morbi iaculis, nunc fringilla sollicitudin pulvinar, arcu erat aliquam ipsum, ut elementum justo lorem et ante. Sed semper, lorem non malesuada congue, neque est condimentum sapien, a tincidunt justo risus non ipsum. Integer nec dui auctor, porta enim et, pharetra est.
      </p>
    </>,
    date: '09/01/2020',
    tag: '#ekologia'
  }
]

export default posts
