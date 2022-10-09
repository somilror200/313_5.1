
import React from 'react'
import { Link } from 'react-router-dom'


const SiteHeader = () => (
    <div class="ui attached stackable menu">

    <div class="ui container">
    <Link class="item" to="/">
    DEV@deakin
      </Link>
      <div class="center item five">
        <div class="ui input"><input type="text" placeholder="Search..."/></div>
      </div>
      <Link to="/" class="item right" >
        <i class="home icon"></i> Home
      </Link>
      <Link to="/post" class="item">
        <i class="grid book icon"></i> Post
      </Link>
      <a class="item">
        <i class="grid user icon"></i> Login
      </a>
     
    </div>
    
    </div>
)

export default SiteHeader
