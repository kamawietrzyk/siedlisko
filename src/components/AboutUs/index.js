import React from 'react'
import ryjki from './ryjki.jpg'
import './index.scss'

const AboutUs = () => (
  <div className="AboutUs">
    <img src={ryjki} alt="about-us-pic" width="20%" />
    <div className="AboutUs__text">
      <h1 className="text-center">Kilka słów o nas</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis risus et nunc consectetur tempus. Aliquam nec aliquam metus. Morbi in placerat nisl. Nam sagittis posuere tristique. Quisque ut est tincidunt, dictum purus nec, elementum ex. Integer sed lacinia erat. Etiam eget maximus elit. Nam massa metus, mollis quis erat quis, finibus condimentum purus. Sed mattis ligula tellus, ut sodales nisl tempor id. Cras finibus dolor vehicula diam aliquet feugiat. Vestibulum sit amet purus cursus nisi mollis congue vel quis ipsum.</p>
      <p>Pellentesque eu ante et sem gravida placerat luctus eu sem. Duis dapibus magna ac urna tempus, sed laoreet nunc porta. Vivamus sit amet lacinia ipsum, eu semper arcu. Sed lectus ex, sagittis porttitor fringilla sed, imperdiet nec est. Fusce pulvinar nisi a est pellentesque, vitae sollicitudin dolor lobortis. Nunc magna nulla, dignissim a erat eget, suscipit tempor sapien. Nam id augue sit amet lectus scelerisque venenatis vitae sodales elit. Proin eu tellus sit amet enim gravida auctor quis non eros. Sed lobortis commodo turpis, at malesuada augue volutpat a. Nulla ac ultrices nibh. Nam cursus turpis sed ante tempus vestibulum. Praesent lobortis turpis mauris, ac faucibus diam consequat sed. Pellentesque eleifend, lacus porttitor tempor bibendum, orci magna efficitur nunc, vitae placerat urna nisl sit amet felis. Aenean hendrerit maximus elit vitae vulputate. Sed eu odio vulputate est imperdiet ullamcorper. Nullam blandit augue hendrerit massa lobortis pretium.</p>
      <p>Ut dictum nunc pulvinar dignissim pretium. Pellentesque iaculis lacus neque, fringilla aliquam dolor maximus sit amet. Nulla facilisi. Sed felis ipsum, feugiat eu ipsum a, fringilla rhoncus justo. Pellentesque sed ultricies dui, sed posuere lectus. Morbi eget pulvinar sem, non pellentesque dolor. Donec urna purus, malesuada sit amet pellentesque vel, lacinia et lacus. Maecenas arcu nulla, varius eget nisl et, fermentum feugiat ex. Proin rutrum sem at dignissim pellentesque. Curabitur vel neque id dui gravida congue a id lacus. Donec in faucibus libero. Proin porta vulputate odio, vel consectetur ligula sagittis fringilla.</p>
    </div>
  </div>
)

export default AboutUs
