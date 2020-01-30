import React from 'react'
import './index.scss'
import perma from './perma.jpg'
import wheel from './wheel.jpg'
import permguild from './permguild.jpg'
import herbSpiral from './herbSpiral.jpeg'
import design1 from './design1.jpg'

const Permaculture = () => (
  <>
    <img src={perma} alt="contact pic" width="100%"/>
    <div className="Permaculture">
      <h1 className="text-center">Permakultura - co to takiego?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce diam urna, finibus non pretium a, hendrerit ac felis. Aliquam erat volutpat. Praesent semper mauris vitae felis dignissim, ut blandit est efficitur. Sed purus arcu, maximus vitae tortor vel, dignissim porttitor sem. Sed risus erat, feugiat sed urna sed, rhoncus scelerisque urna. Suspendisse vitae lacus vel ipsum condimentum laoreet. Fusce euismod sapien id augue tristique consequat. Praesent tincidunt diam varius ultricies ullamcorper. Mauris aliquam massa velit, eu vulputate urna consectetur sit amet. Suspendisse gravida odio nulla, id venenatis justo luctus sit amet. Vestibulum convallis accumsan diam sed hendrerit. Etiam cursus molestie odio in scelerisque. Nunc at eleifend augue, sit amet egestas nisl.</p>
      <div className="Permaculture__one py-5">
        <img src={design1} alt="permaculture-guild" width="30%" className="my-auto"/>
        <p>
        Praesent non nibh ut mauris blandit tincidunt. Nam a purus vitae enim imperdiet tristique ac sed tellus. Aenean fermentum elit nunc, vitae dapibus quam congue vitae. Suspendisse dictum justo in sem rhoncus, sed efficitur odio egestas. Pellentesque leo felis, ornare at dignissim malesuada, laoreet a magna. Pellentesque ac congue mi. Donec tincidunt sollicitudin mollis. Pellentesque pulvinar ornare odio quis euismod. Ut eu semper mauris, sit amet tristique felis. Integer ut neque nec leo tempor varius vel sed nulla. Nunc lectus urna, semper ac magna quis, dignissim varius odio. Etiam finibus elit a arcu vulputate, quis accumsan tortor elementum. Pellentesque tristique aliquet lectus, vel eleifend arcu consectetur non. Curabitur feugiat dui odio, sed congue ligula sagittis feugiat. Maecenas congue pulvinar massa ac ultricies. Nam feugiat dui enim, nec vestibulum odio faucibus quis. Ut odio nunc, auctor sed placerat id, vehicula ut felis. Cras dignissim est sit amet tortor ultricies, non porttitor enim congue.
        </p>
      </div>
      <img className="Permaculture__pic" src={wheel} alt="holmgren-permaculture-basics" width="90%" />
      <div className="Permaculture__two">
        <p>Integer erat nisl, semper vitae tellus in, eleifend malesuada urna. Praesent sed elit faucibus, fringilla nulla non, finibus leo. Integer laoreet ante vitae libero malesuada, interdum ultricies diam ultricies. Aliquam vulputate quam sem, sit amet semper ipsum sagittis vel. Aenean rutrum, felis sit amet imperdiet pulvinar, mauris dolor sodales justo, a efficitur est ligula ac enim. Nulla lobortis ut dui a iaculis. Aliquam facilisis lectus non ipsum fringilla commodo. Nulla ante sem, vehicula viverra nibh eget, facilisis rutrum diam. Curabitur urna turpis, iaculis in tellus vitae, ullamcorper venenatis quam.</p>
        <img src={permguild} alt="permaculture-guild" width="40%" />
      </div>
      <div className="Permaculture__three">
        <img src={herbSpiral} alt="permaculture-guild" width="40%" />
        <p>
         Praesent non nibh ut mauris blandit tincidunt. Nam a purus vitae enim imperdiet tristique ac sed tellus. Aenean fermentum elit nunc, vitae dapibus quam congue vitae. Suspendisse dictum justo in sem rhoncus, sed efficitur odio egestas. Pellentesque leo felis, ornare at dignissim malesuada, laoreet a magna. Pellentesque ac congue mi. Donec tincidunt sollicitudin mollis. Pellentesque pulvinar ornare odio quis euismod. Ut eu semper mauris, sit amet tristique felis. Integer ut neque nec leo tempor varius vel sed nulla. Nunc lectus urna, semper ac magna quis, dignissim varius odio. Etiam finibus elit a arcu vulputate, quis accumsan tortor elementum. Pellentesque tristique aliquet lectus, vel eleifend arcu consectetur non.
        </p>
      </div>
    </div>
  </>
)

export default Permaculture
