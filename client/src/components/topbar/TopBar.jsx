import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'

export const TopBar = () => {
  const user=true;
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className='topCenter'>
         <ul className="topList">
             <li className='topListItem'>
               <Link className='link' to="/">HOME</Link>
              </li>
             <li className='topListItem'>
               <Link className='link' to="/">ABOUT</Link>
              </li>
             <li className='topListItem'>
               <Link className='link' to="/">CONTACT</Link>
              </li>
             <li className='topListItem'>
               <Link className='link' to="/post/write">WRITE</Link>
              </li>
             <li className='topListItem'>{user && "LOGOUT"}</li>
         </ul>
        </div>
        <div className='topRight'>
          {user ?(
            <img
            className='topImg'
            src='https://centralrecorder.com/wp-content/uploads/2021/10/face-close-up-itachi-uchiha-8rnu7j2hbvgd4sb6.jpg'
            alt=''
            />
            ):
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to="/login">Login</Link>
              </li>
              <li className='topListItem'>  
                <Link className='link' to="/register">Register</Link>
              </li>
            </ul>
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
