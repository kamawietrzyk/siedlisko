import React from 'react'
import Permaculture from '../components/Permaculture'
import ScrollToTopOnMount from '../components/ScrollToTop'

const PermacultureView = () => (
  <div className="container p-0">
    <ScrollToTopOnMount />
    <Permaculture />
  </div>
)
export default PermacultureView
