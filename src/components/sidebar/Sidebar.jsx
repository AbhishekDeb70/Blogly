import './sidebar.css'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
          <span className='sidebarTitle'>ABOUT ME</span>
          <img src='https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/14883cb6/pikachu-photo-cake-2.png'
          alt=''/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at, fugiat veritatis 
            consectetur nostrum nisi! Autem magni vel beatae nulla. Ex atque pariatur vel ducimus 
            quasi molestiae, et quam reiciendis!
          </p>
        </div>
        <div className="sidebarItem">
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
        </div>
        <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
        <i className="sidebarIcon fa-brands fa-facebook-square"></i>
        <i className="sidebarIcon fa-brands fa-twitter-square"></i>
        <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
        </div>
    </div>
  )
}
