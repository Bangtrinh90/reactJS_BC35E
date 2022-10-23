import React, { Component } from 'react'
import HeaderHome from "../BaiTapHomeLayout/HeaderHome"
import Navigation from "../BaiTapHomeLayout/Navigation"
import Content from '../BaiTapHomeLayout/Content'
import Footer from "../BaiTapHomeLayout/Footer"

export default class BaiTapHomeLayout extends Component {
  render() {
    return (
      <div>
      <HeaderHome />
      <div className='row p-0 m-0'>
        <div className='col-4 p-0 mt-2'>
        <Navigation />
        </div>
        <div className='col-8 p-0 mt-2'>
        <Content />
        </div>        
      </div>
      <Footer />      
      </div>
    )
  }
}
