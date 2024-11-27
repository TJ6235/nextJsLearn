"use client"

import React, { useState } from 'react'
import  '@styles/globals.css'

const Footer = () => {

  const [users,setUsers]=useState({
    username:""
  })

  console.log(users);
  
  return (
    <footer id='footer' className='bg-gray-800'>
    <div className='container'>
        <div className='row'>
            <div className='column'>
                <h3>About Us</h3>
                <p>
                    We are a leading company in our industry, committed to providing .
                </p>
            </div>
            <div className='column'>
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                </ul>
            </div>
            <div className='column'>
                <h3>Follow Us</h3>
                <ul className='socialMedia'>
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </div>
            <div className='column'>
                <h3>Subscribe to Our Newsletter</h3>
                <form className='subscribeForm'>
                    <input onChange={(e)=>setUsers({...users, username: e.target.value})} type="email" placeholder="Your email address" required />
                    <button className='btn bg-blue-900' type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        <p className='copyRight'>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </div>
</footer>
  )
}

export default Footer