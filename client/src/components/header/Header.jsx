import "./header.css"

export const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">THB93Verse presents</span>
        <span className="headerTitleLg">bloGly</span>
      </div>  
      <img
            className="headerImg"
            src="http://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg"
            alt=""
      />
    </div>
  )
}
